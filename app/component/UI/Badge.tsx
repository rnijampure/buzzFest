"use client";

import { Badge } from "@/components/ui/badge";
import { useNewFilter } from "@/hooks/useUpdateFilters";
import {
  getFilterBadgeClasses,
  type FilterBadgeColor,
} from "@/lib/badge-filter-colors";

export type { FilterBadgeColor };

export type FilterBadgeListProps = {
  items: string[];
  color?: FilterBadgeColor;
  selectedValues: string[];
  onToggle: (item: string, isChecked: boolean) => void;
};

/**
 * Presentational filter badges — easy to test and wrap in Storybook.
 */
export function FilterBadgeList({
  items,
  color = "brown",
  selectedValues,
  onToggle,
}: FilterBadgeListProps) {
  return (
    <li className="list-none px-2 py-2">
      <div className="flex w-full flex-wrap justify-start gap-2">
        {items.map((item) => {
          const normalized = item.toLowerCase();
          const isSelected = selectedValues.includes(normalized);

          return (
            <Badge
              key={item}
              className={getFilterBadgeClasses(color, isSelected)}
              onClick={() => onToggle(item, !isSelected)}
            >
              {item}
            </Badge>
          );
        })}
      </div>
    </li>
  );
}

function BadgeComponent({
  items,
  color = "brown",
}: {
  items: string[];
  color?: FilterBadgeColor;
}) {
  const { toggleUpdateFilter, searchParams } = useNewFilter();
  const selectedValues =
    searchParams
      .get("category")
      ?.split(",")
      .map((value) => value.toLowerCase()) ?? [];

  const handleToggle = (item: string, isChecked: boolean) => {
    toggleUpdateFilter("category", item.toLowerCase(), isChecked);
  };

  return (
    <FilterBadgeList
      items={items}
      color={color}
      selectedValues={selectedValues}
      onToggle={handleToggle}
    />
  );
}

export default BadgeComponent;
