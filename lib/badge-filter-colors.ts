export type FilterBadgeColor = "brown" | "green" | "gold";

const filterBadgeColorClasses = {
  brown: "bg-brand-brown hover:bg-brand-brown/90 text-[10px] py-1.5 px-3",
  green:
    "bg-brand-green-light hover:bg-brand-green/90 text-[11px] py-3 px-2 uppercase",
  gold: "bg-brand-gold hover:bg-brand-gold/90 text-[15px] py-1.5 px-3",
  selected:
    "bg-brand-gold hover:bg-brand-green/90 text-[11px] py-3 px-2 uppercase",
} as const satisfies Record<FilterBadgeColor | "selected", string>;

export { filterBadgeColorClasses };

/**
 * Pure helper: resolves badge class names for filter chips (unit-testable).
 */
export function getFilterBadgeClasses(
  color: FilterBadgeColor,
  isSelected: boolean,
): string {
  return [
    filterBadgeColorClasses[color],
    isSelected ? filterBadgeColorClasses.selected : "",
    "text-primary-foreground border-none tracking-wider font-semibold cursor-pointer transition-colors",
  ]
    .filter(Boolean)
    .join(" ");
}
