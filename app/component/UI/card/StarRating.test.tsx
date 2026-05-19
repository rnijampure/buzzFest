import { describe, expect, test } from "vitest";
import { screen } from "storybook/test";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./StarRating.stories";

const composed = composeStories(Stories);

describe("StarRating (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("PerfectScore renders rating with brand token class", async () => {
    await composed.PerfectScore.run();
    const rating = screen.getByText("5");
    expect(rating).toBeTruthy();
    expect(rating.parentElement?.className).toContain("text-brand-green");
  });

  test("ZeroRating renders zero", async () => {
    await composed.ZeroRating.run();
    expect(screen.getByText("0")).toBeTruthy();
  });

  test("MissingData renders nothing", async () => {
    await composed.MissingData.run();
    expect(screen.queryByText("0")).toBeNull();
    expect(screen.queryByText("5")).toBeNull();
  });
});
