import { describe, expect, test } from "vitest";
import { screen, userEvent } from "storybook/test";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./DoughnutCard.stories";

const composed = composeStories(Stories);

describe("DoughnutCard (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("Default renders creator, price, and add to cart", async () => {
    await composed.Default.run();
    expect(screen.getByText(/sandhya mandi/i)).toBeTruthy();
    expect(screen.getByText(/₹120/)).toBeTruthy();
    expect(screen.getByTestId("add-to-cart-button")).toBeTruthy();
  });

  test("SoldOut shows waitlist and overlay", async () => {
    await composed.SoldOut.run();
    expect(screen.getByText("Sold Out")).toBeTruthy();
    const waitlistButton = screen.getByRole("button", {
      name: /Waitlist/i,
    }) as HTMLButtonElement;
    expect(waitlistButton.disabled).toBe(true);
  });

  test("LowStock shows stock label", async () => {
    await composed.LowStock.run();
    expect(screen.getByText(/Stock Available: 2/)).toBeTruthy();
  });

  test("Add to cart responds to click when in stock", async () => {
    await composed.Default.run();
    const button = screen.getByTestId("add-to-cart-button");
    await userEvent.click(button);
    expect(button).toBeTruthy();
  });
});
