import { type Order, type InsertOrder } from "@shared/schema";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { randomUUID } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ORDERS_FILE = join(__dirname, "../data/orders.json");

export interface IStorage {
  createOrder(order: InsertOrder): Promise<Order>;
  getOrders(): Promise<Order[]>;
}

export class JsonStorage implements IStorage {
  private async ensureDataDir(): Promise<void> {
    const dataDir = dirname(ORDERS_FILE);
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
  }

  private async readOrders(): Promise<Order[]> {
    await this.ensureDataDir();
    try {
      const data = await fs.readFile(ORDERS_FILE, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private async writeOrders(orders: Order[]): Promise<void> {
    await this.ensureDataDir();
    await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf-8");
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const orders = await this.readOrders();
    const order: Order = {
      id: randomUUID(),
      ...insertOrder,
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    await this.writeOrders(orders);
    return order;
  }

  async getOrders(): Promise<Order[]> {
    return this.readOrders();
  }
}

export const storage = new JsonStorage();
