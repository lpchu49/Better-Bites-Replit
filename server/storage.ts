import { type Order, type InsertOrder, orders } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

export interface IStorage {
  createOrder(order: InsertOrder): Promise<Order>;
  getOrders(): Promise<Order[]>;
}

export class DbStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const [order] = await this.db.insert(orders).values(insertOrder).returning();
    return order;
  }

  async getOrders(): Promise<Order[]> {
    return this.db.select().from(orders).orderBy(orders.createdAt);
  }
}

export const storage = new DbStorage();
