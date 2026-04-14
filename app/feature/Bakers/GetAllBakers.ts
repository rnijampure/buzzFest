// app/feature/products/getProducts.ts
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

const fetchBakers = async (filters: {
  minRating?: number;
  location?: string;
}) => {
  return prisma.baker.findMany({
    where: {
      ...(filters.minRating && { rating: { gte: filters.minRating } }),
      ...(filters.location && {
        location: { contains: filters.location, mode: "insensitive" },
      }),
    },
    include: { products: true },
  });
};

export const GetAllBakers = (filters: {
  minRating?: number;
  location?: string;
}) => {
  // Create a composite key that includes ALL active filters
  const cacheKey = `bakers-${filters.minRating ?? "all"}-${filters.location ?? "any"}`;

  return unstable_cache(() => fetchBakers(filters), ["bakers", cacheKey], {
    revalidate: 60,
    tags: ["bakers"],
  })();
};
