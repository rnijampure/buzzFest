import { describe, expect, it } from "vitest";
import { getStarFillPercent, getStarGradientId } from "./star-rating";

describe("getStarFillPercent", () => {
  it("returns 100 for fully filled stars", () => {
    expect(getStarFillPercent(4.5, 0)).toBe(100);
    expect(getStarFillPercent(4.5, 3)).toBe(100);
  });

  it("returns 0 for empty stars", () => {
    expect(getStarFillPercent(4.5, 4)).toBe(50);
    expect(getStarFillPercent(4.5, 5)).toBe(0);
  });

  it("returns partial fill for the boundary star", () => {
    expect(getStarFillPercent(3.2, 3)).toBeCloseTo(20);
  });
});

describe("getStarGradientId", () => {
  it("builds a stable id from index and fill", () => {
    expect(getStarGradientId(2, 50)).toBe("star-grad-2-50");
  });
});
