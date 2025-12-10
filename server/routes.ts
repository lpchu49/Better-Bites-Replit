import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";


export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);


      // Email sending removed as per request to simplify order process
      // sendOrderConfirmationEmail(order).catch(err => {
      //   console.error("Email sending failed:", err);
      // });

      res.json(order);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: fromError(error).toString()
        });
      }
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getOrders();
      res.json(orders);
    } catch (error: any) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  return httpServer;
}
