"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useNewFilter } from "@/hooks/useUpdateFilters";
import { useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

export function SearchComponent() {
  const { updateFilters, searchParams } = useNewFilter();
  const oldparams = searchParams;
  const [value, setValue] = useState("");
  const hasSearchParams = useSearchParams();

  const hasQuery = hasSearchParams.has("search"); // Returns true or false

  const hasParams = hasSearchParams.size > 0;

  // 🔹 Initialize from URL (important for SSR sync)
  const initialSearch = searchParams.get("search") || "";

  // 🔹 Debounce user input
  const debouncedValue = useDebounce(value, 400);
  // 🔹 Update URL when debounced value changes
  useEffect(() => {
    const trimmed = debouncedValue.trim().toLowerCase();

    if (trimmed) {
      updateFilters({ search: trimmed.toString() }, true);
    } else {
      updateFilters({ search: undefined });
    }
  }, [debouncedValue]);

  // 🔹 Update URL when debounced value changes
  const handleOnCheckedChange = (e: any) => {
    setValue(e.target.value);

    updateFilters(
      { search: e.target.value.trim().toString().toLowerCase() },
      true,
    );
  };
  return (
    <Field orientation="horizontal" className="w-[95%] m-5 justify-center">
      <Input
        type="search"
        name="search"
        onKeyUp={handleOnCheckedChange}
        placeholder="Type here..."
        className="w-[45%] rounded-2xl  "
      />
      <Button variant="brand" type="button">
        Search
      </Button>
    </Field>
  );
}
