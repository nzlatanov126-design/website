
import { db } from "./db";
import { eq } from "drizzle-orm";
import { inquiries, reviews, type InsertInquiry, type Inquiry, type InsertReview, type Review } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getApprovedReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getApprovedReviews(): Promise<Review[]> {
    return db
      .select()
      .from(reviews)
      .where(eq(reviews.approved, true))
      .orderBy(reviews.createdAt);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db
      .insert(reviews)
      .values({ ...insertReview, approved: false })
      .returning();
    return review;
  }
}

export const storage = new DatabaseStorage();
