"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
export const clearFiltersLinkClass =
  "rounded-2xl border border-brand-orange-deep bg-brand-orange-deep p-2 text-sm font-bold text-primary-foreground outline-0 ring-0";

export type ClearFiltersProps = {
  hasActiveFilters: boolean;
  className?: string;
};

/**
 * Presentational clear-filters control (test / Storybook friendly).
 */
export function ClearFiltersControl({
  hasActiveFilters,
  className,
}: ClearFiltersProps) {
  if (!hasActiveFilters) return null;

  return (
    <div className={cn("flex flex-col", className)}>
      <p className="mr-5 w-35 text-center text-sm font-bold text-foreground">
        <Link href="/products" title="All Products" className={clearFiltersLinkClass}>
          Clear Filters
        </Link>
      </p>
    </div>
  );
}

export default function ClearFilters() {
  const searchParams = useSearchParams();
  const hasActiveFilters = searchParams.size > 0;

  return <ClearFiltersControl hasActiveFilters={hasActiveFilters} />;
}
