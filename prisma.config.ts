import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

// Ensure environment variables are loaded
dotenv.config();

export default defineConfig({
  datasource: {
    // For 'db push' and 'generate', use the direct connection string
    url: process.env.DIRECT_URL || process.env.DATABASE_URL,
  },
});
