"use client";
// buzz-fest/hooks/useUpdateFilters.ts
type UpdateOptions = {
  replace?: boolean; // replace vs merge
  scroll?: boolean;
};

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const useNewFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // updateFilters(type, slug, checked);
  const updateFilters = (
    updates: Record<string, string | undefined>,
    isSearch?: boolean | undefined,
  ) => {
    // new URLSearchParams(searchParams.toString());
    const params = isSearch
      ? new URLSearchParams("")
      : new URLSearchParams(searchParams.toString());

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
  const toggleUpdateFilter = (
    key: string,
    value: string,
    isChecked: boolean,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
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
    // This triggers the server-side re-render automatically
    router.push(`${pathname}?${params.toString()}`, {
      scroll: isChecked == true ? false : true,
    });
    localStorage.setItem("oldParams", params.toString().toLowerCase());
  };
  // ✅ 3. Clear all filters
  const clearAllFilters = () => {
    router.push(pathname);
  };
  return { updateFilters, toggleUpdateFilter, searchParams, clearAllFilters };
};
