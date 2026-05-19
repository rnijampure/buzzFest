/**
 * Catalog product shape for UI cards (Prisma / API boundary).
 * Coerce Decimal fields to number at the server boundary when needed.
 */
export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number | string;
  category: string[];
  starRating: number;
  images: string[];
  creatorSlug: string;
  isFeatured: boolean;
  isVeg: boolean;
  stock: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export function formatCreatorSlug(
  creatorSlug: string | undefined | null,
): string {
  return creatorSlug?.replace(/-/g, " ") ?? "Unknown Baker";
}

export function getProductDisplayPrice(
  price: Product["price"] | undefined | null,
): string {
  if (price === undefined || price === null) return "0";
  return String(price);
}

export function getProductPriceNumber(
  price: Product["price"] | undefined | null,
): number {
  const n = Number(price);
  return Number.isFinite(n) ? parseInt(n.toString()) : 0;
}
