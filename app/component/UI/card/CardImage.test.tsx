import { describe, expect, test } from "vitest";
import { screen } from "storybook/test";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./CardImage.stories";

const composed = composeStories(Stories);

describe("CardImage (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("Default renders cloudinary image mock", async () => {
    await composed.Default.run();
    const img = screen.getByTestId("cloudinary-image");
    expect(img).toBeTruthy();
    expect(img.getAttribute("alt")).toBe("Delicious Chocolate Cupcake");
    expect(screen.getByTestId("card-image-container")).toBeTruthy();
  });

  test("SquareRatio applies aspect container", async () => {
    await composed.SquareRatio.run();
    const container = screen.getByTestId("card-image-container");
    expect(container.className).toContain("aspect-square");
  });

  test("VideoRatio applies aspect-video class", async () => {
    await composed.VideoRatio.run();
    const container = screen.getByTestId("card-image-container");
    expect(container.className).toContain("aspect-video");
  });

  test("MissingImage renders placeholder copy", async () => {
    await composed.MissingImage.run();
    expect(screen.getByTestId("image-placeholder")).toBeTruthy();
    expect(screen.getByText("No Image Available")).toBeTruthy();
  });

  test("HoverEffectTest mounts image container", async () => {
    await composed.HoverEffectTest.run();
    expect(screen.getByTestId("card-image-container")).toBeTruthy();
  });
});
