import { describe, expect, test } from "vitest";
import { screen } from "storybook/test";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./BakerCard.stories";

const composed = composeStories(Stories);

describe("BakerCard (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("Default renders baker name and experience badge", async () => {
    await composed.Default.run();
    expect(screen.getByText("Sandhya Mishra")).toBeTruthy();
    expect(screen.getByText("Baker since 2012")).toBeTruthy();
    expect(screen.getByText(/Indiranagar/i)).toBeTruthy();
  });

  test("Featured renders updated title", async () => {
    await composed.Featured.run();
    expect(screen.getByText(/Featured Baker/i)).toBeTruthy();
  });

  test("LongBio renders extended name", async () => {
    await composed.LongBio.run();
    expect(screen.getByText(/Alexandra Montgomery/i)).toBeTruthy();
  });

  test("MissingImage shows image placeholder", async () => {
    await composed.MissingImage.run();
    expect(screen.getByTestId("image-placeholder")).toBeTruthy();
  });

  test("MobileConstrained mounts inside decorator width", async () => {
    await composed.MobileConstrained.run();
    expect(screen.getByText("Sandhya Mishra")).toBeTruthy();
  });
});
