"use client";
import { Badge } from "@/components/ui/badge";
import { useUpdateFilters1 } from "@/hooks/useUpdateFilters";
import React, { useEffect } from "react";

// Source of Truth for colors to avoid Tailwind purging
const COLOR_MAP: Record<string, string> = {
  brown: "bg-brand-brown hover:bg-brand-brown/90 text-[10px] py-1.5 px-3 ",
  green: "bg-[#8BC34A] hover:bg-brand-green/90 text-[11px] py-3 px-2 uppercase",
  gold: "bg-brand-gold hover:bg-brand-gold/90 text-[15px] py-1.5 px-3 ",
  selected:
    "bg-[#d9942f] hover:bg-brand-green/90 text-[11px] py-3 px-2 uppercase",
};

const BadgeComponent = ({
  items,
  color = "brown", // Default to brown
}: {
  items: string[];
  color?: "brown" | "green" | "gold"; // Strict typing is safer
}) => {
  const { updateFilters, searchParams } = useUpdateFilters1();
  const currentValues =
    searchParams
      .get("category")
      ?.split(",")
      .map((value) => {
        return value.toLowerCase();
      }) || [];

  return (
    <li className="px-2 py-2 list-none">
      <div className="flex w-full flex-wrap justify-start gap-2">
        {items.map((item) => {
          const slug = item.toLowerCase().replace(/[\s+]+/g, "-");
          const isSelected = currentValues.includes(item.toLowerCase());
          return (
            <Badge
              key={item}
              className={`
              ${COLOR_MAP[color]}  
                  ${currentValues.includes(item.toLowerCase()) && COLOR_MAP["selected"]}
              text-white border-none 
                tracking-wider font-semibold
              cursor-pointer transition-colors
              ${isSelected ? COLOR_MAP["selected"] : ""}
            `}
              onClick={(checked) => {
                if (currentValues.includes(item.toLowerCase())) {
                  updateFilters("category", item.toLowerCase(), false);
                } else {
                  updateFilters("category", item.toLowerCase(), true);
                }
              }}
            >
              {item}
            </Badge>
          );
        })}
      </div>
    </li>
  );
};

export default BadgeComponent;
