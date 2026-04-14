// buzz-fest/hooks/useUpdateFilters.ts
"use client";
// ❌ Remove the revalidateTag import

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useUpdateFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`;
    console.log("Route changed to:", url);

    // Add logic here (e.g., analytics, closing a menu)
  }, [pathname, searchParams]);

  const updateFilters = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // This triggers the server-side re-render automatically
    router.push(`${pathname}?${params.toString()}`);
  };

  return { updateFilters, searchParams };
};

export const useUpdateFilters1 = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilters = (key: string, value: string, isChecked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    // Get existing values for this key (e.g., "Ananya,Priya")
    const existingValue = params.get(key);
    let valuesArray = existingValue ? existingValue.split(",") : [];

    if (isChecked) {
      // Add the value if it's not already there
      if (!valuesArray.includes(value)) {
        valuesArray.push(value);
      }
    } else {
      // Remove the value if unchecked
      valuesArray = valuesArray.filter((v) => v !== value);
    }

    // If array is empty, remove the key from URL, otherwise set joined string
    if (valuesArray.length > 0) {
      params.set(key, valuesArray.join(","));
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { updateFilters, searchParams };
};
