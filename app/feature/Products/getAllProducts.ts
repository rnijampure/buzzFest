// app/feature/products/getProducts.ts

import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
type product = {
  name?: string;
  slug?: string;
  description?: string;
  price?: any;
  category?: string[];
  starRating?: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  creatorSlug: string[];
  isFeatured: boolean;
  isVeg: boolean;
  stock: number;
};
type OptionalProduct = Partial<product>;

const fetchProducts = async (filters?: OptionalProduct) => {
  // 1. If no filters, return all products
  if (!filters || Object.keys(filters).length === 0) {
    return prisma.product.findMany();
  }
  // Use your normalize helper to ensure everything is URL-friendly
  const normalizedCategory = normalizeArray(filters.category);
  const normalizedCreatorSlug = normalizeArray(filters.creatorSlug);
  const isVegan = filters.category?.includes("vegan");

  return prisma.product.findMany({
    where: {
      ...(filters.creatorSlug && {
        creatorSlug: {
          in: filters.creatorSlug,
        },
      }),

      ...(filters.category && {
        category: {
          // Toggle operator based on "Vegan" presence
          [isVegan ? "hasEvery" : "hasSome"]: filters.category,
        },
      }),
      ...(filters.price && {
        price: {
          lte: filters.price[1],
          gte: filters.price[0],
        },
      }),
    },
  });
};
export const GetAllProducts = (filters?: OptionalProduct) => {
  console.log("GetAllProducts   filter:::", filters?.price);
  console.log("GetAllProducts   filter:::", filters);
  // Create a unique key based on the filters so the cache doesn't serve
  // "Vegan" results to someone looking for "Chocolate".
  const filterKey = JSON.stringify(filters || "all");

  return unstable_cache(
    () => fetchProducts(filters),
    ["products-list", filterKey], // The key includes the filter string
    {
      revalidate: 60,
      tags: ["products"],
    },
  )();
};
// --- Helper Functions ---

function normalize(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

function normalizeArray(arr?: string | string[]) {
  if (!arr) return [];
  const list = Array.isArray(arr) ? arr : arr.split(",");
  return list.map(normalize).filter(Boolean);
}
/*   return prisma.product.findMany({
    where: {
      ...(filters.creatorSlug && {
        creatorSlug: {
          in: filters.creatorSlug,
        },
      }),
      ...(filters.category && {
        category: {
          hasSome: filters.category,
        },
      }),
      ...(filters.category && {
        category: {
          hasSome: filters.category,
        },
      }),
    },
  }); */
