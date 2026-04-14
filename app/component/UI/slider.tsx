"use client";

import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useUpdateFilters } from "@/hooks/useUpdateFilters";
import { useDebounce } from "@/hooks/useDebounce";
import { Loader2 } from "lucide-react";

export function PriceSlider() {
  const { updateFilters, searchParams } = useUpdateFilters();

  // Helper to parse URL
  const getUrlPrices = () => {
    const raw = searchParams.get("price")?.split(",") || [];
    return [Number(raw[0]) || 100, Number(raw[1]) || 2000];
  };

  // 1. Local State initialized once from URL
  const [range, setRange] = useState<number[]>(getUrlPrices());
  const debouncedRange = useDebounce(range, 500);

  // 2. EFFECT: State -> URL (Triggered only by debounced value)
  useEffect(() => {
    const [urlMin, urlMax] = getUrlPrices();

    // Only update URL if the debounced slider differs from what's already in the URL
    if (debouncedRange[0] !== urlMin || debouncedRange[1] !== urlMax) {
      const newUrlValue: any = [debouncedRange[0], debouncedRange[1]];
      updateFilters({
        price: newUrlValue
          .toString()
          .split(",")
          .map((s: any) => s.toLowerCase()),
      });
    }
  }, [debouncedRange]); // 👈 WATCH DEBOUNCED RANGE, NOT SEARCHPARAMS

  // 3. EFFECT: URL -> State (Triggered by external URL changes like "Reset")
  useEffect(() => {
    const [urlMin, urlMax] = getUrlPrices();
    // Only update local slider if the URL changes from OUTSIDE this component
    if (urlMin !== range[0] || urlMax !== range[1]) {
      setRange([urlMin, urlMax]);
    }
  }, [searchParams]);
  /* */
  const isWaiting =
    range[0] !== debouncedRange[0] || range[1] !== debouncedRange[1];

  return (
    <div className="w-full max-w-xs space-y-6 px-2">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
            Price Range
          </span>
          {isWaiting && (
            <Loader2 className="h-3 w-3 animate-spin text-[#d9942f]" />
          )}
        </div>
        <div className="text-sm font-bold text-[#d9942f] flex gap-1">
          <span>₹{range[0]}</span>
          <span className="opacity-50">-</span>
          <span>₹{range[1]}</span>
        </div>
      </div>

      <Slider
        value={range}
        min={100}
        max={2000}
        step={50}
        minStepsBetweenThumbs={1}
        onValueChange={setRange}
        className={`cursor-pointer transition-opacity ${isWaiting ? "opacity-70" : "opacity-100"}`}
      />

      <div className="flex justify-between items-center text-[10px] font-semibold text-white/40 tracking-widest uppercase">
        <div className="flex flex-col">
          <span>Min</span>
          <span className="text-white/80 text-[11px]">₹0</span>
        </div>
        <div className="flex flex-col text-right">
          <span>Max</span>
          <span className="text-white/80 text-[11px]">₹2000</span>
        </div>
      </div>
    </div>
  );
}
