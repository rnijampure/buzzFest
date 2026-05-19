// app/feature/products/getProducts.ts

import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { equal } from "assert";

type OptionalProduct = Partial<any>;

const fetchProducts = async (filters?: OptionalProduct) => {
  if (!filters || Object.keys(filters).length === 0) {
    return prisma.product.findMany();
  }

  const normalizedCategory = normalizeArray(filters.category);
  const normalizedCreatorSlug = normalizeArray(filters.creatorSlug);
  const isVegan = normalizedCategory.includes("vegan");
  const isSearch = filters?.search?.length || -1;

  if (isSearch > 0) {
    const search = normalize(filters.search!);

    return prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
          { creatorSlug: { contains: search, mode: "insensitive" } },
          { category: { has: search } },
        ],
      },
    });
  } else {
    return prisma.product.findMany({
      where: {
        ...(normalizedCreatorSlug.length > 0 && {
          creatorSlug: {
            in: normalizedCreatorSlug,
          },
        }),

        ...(normalizedCategory.length > 0 && {
          category: {
            [isVegan ? "hasEvery" : "hasSome"]: normalizedCategory,
          },
        }),

        ...(filters.price && {
          price: {
            lte: filters.price[1],
            gte: filters.price[0],
          },
        }),

        ...(filters.isFeatured && {
          isFeatured: true,
        }),
      },
    });
  }
};
export const GetAllProducts = (filters?: OptionalProduct) => {
  // console.log("GetAllProducts   filter:::", filters);
  //console.log("GetAllProducts   filter:::", filters);
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
