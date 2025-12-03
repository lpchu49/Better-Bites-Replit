import { z } from "zod";

export const orderSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  product: z.string().min(1, "Product is required"),
  message: z.string().optional(),
  createdAt: z.string(),
});

export const insertOrderSchema = orderSchema.omit({
  id: true,
  createdAt: true,
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = z.infer<typeof orderSchema>;
