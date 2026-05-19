import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Use pg.Pool for better connection management with the adapter// For Neon Free Tier, we use a very small pool to avoid "Connection Limit" errors
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 2, // 👈 Limit to 2 connections so you don't exhaust the Free Tier limit
  connectionTimeoutMillis: 15000,
});
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    // Optional: Log queries during development to help with debugging
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
