import { describe, expect, it } from "vitest";
import { getFilterBadgeClasses } from "./badge-filter-colors";

describe("getFilterBadgeClasses", () => {
  it("includes base color classes", () => {
    const classes = getFilterBadgeClasses("brown", false);
    expect(classes).toContain("bg-brand-brown");
    expect(classes).not.toContain("bg-brand-gold");
  });

  it("adds selected classes when selected", () => {
    const classes = getFilterBadgeClasses("green", true);
    expect(classes).toContain("bg-brand-green-light");
    expect(classes).toContain("bg-brand-gold");
  });
});
