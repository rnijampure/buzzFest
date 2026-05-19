import { describe, expect, test } from "vitest";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./BaseCardSkeleton.stories";

const composed = composeStories(Stories);

describe("BaseCardSkeleton (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("Default renders pulse skeleton without action row", async () => {
    await composed.Default.run();
    const card = document.querySelector(".animate-pulse");
    expect(card).toBeTruthy();
    expect(document.querySelectorAll(".rounded-md").length).toBe(0);
  });

  test("WithAction renders price and button placeholders", async () => {
    await composed.WithAction.run();
    expect(document.querySelector(".rounded-md")).toBeTruthy();
  });

  test("LoadingDense renders extra description lines", async () => {
    await composed.LoadingDense.run();
    const linePlaceholders = document.querySelectorAll(
      ".space-y-2 > .h-3.rounded",
    );
    expect(linePlaceholders.length).toBeGreaterThanOrEqual(4);
  });
});
