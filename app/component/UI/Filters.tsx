//buzz-fest\app\component\UI\Filters.tsx
"use client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUpdateFilters } from "@/hooks/useUpdateFilters";

export default function Filters() {
  const { updateFilters, searchParams } = useUpdateFilters();
  const currentRating = searchParams.get("minRating");
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`;
    console.log("Route changed to:", url);

    // Add logic here (e.g., analytics, closing a menu)
  }, [pathname, searchParams]);
  return (
    <div className="flex gap-2">
      <button
        className={`px-4 py-2 border rounded ${currentRating === "4.5" ? "bg-blue-500 text-white" : ""}`}
        onClick={() => updateFilters({ minRating: "4.5" })}
      >
        ⭐ 4.5+ Rated
      </button>
      <button
        className={`px-4 py-2 border rounded `}
        onClick={() => updateFilters({ location: "Koramangala, Bangalore" })}
      >
        Location
      </button>
      <button
        className="px-4 py-2 border rounded"
        onClick={() =>
          updateFilters({ minRating: undefined, location: undefined })
        } // Clear filter
      >
        Clear Filters
      </button>
    </div>
  );
}
