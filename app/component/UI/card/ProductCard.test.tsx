import { describe, expect, test } from "vitest";
import { screen, userEvent } from "storybook/test";
import { composeStories, testAllStoryVariants } from "./story-test-utils";
import * as Stories from "./ProductCard.stories";

const composed = composeStories(Stories);

describe("ProductCard (story-driven)", () => {
  testAllStoryVariants(Stories);

  test("Default renders product metadata and design tokens", async () => {
    await composed.Default.run();

    expect(screen.getByTestId("product-card")).toBeTruthy();
    expect(screen.getByTestId("product-name").textContent).toContain(
      "Lavender Lemonade Drop",
    );
    expect(screen.getByTestId("product-creator").textContent).toContain(
      "sandhya mandi",
    );
    expect(screen.getByTestId("product-price").textContent).toContain("₹100.00");
    expect(screen.getByTestId("product-stock").textContent).toContain(
      "Stock: 30",
    );

    const card = screen.getByTestId("product-card");
    expect(card.className).toContain("border-border");
  });

  test("Featured keeps product card mounted", async () => {
    await composed.Featured.run();
    expect(screen.getByTestId("product-card")).toBeTruthy();
  });

  test("LongDesc renders product name", async () => {
    await composed.LongDesc.run();
    expect(screen.getByTestId("product-name").textContent).toContain(
      "Lavender Lemonade Drop",
    );
  });

  test("MissingImage falls back to placeholder image path", async () => {
    await composed.MissingImage.run();
    expect(screen.getByTestId("product-card")).toBeTruthy();
    expect(screen.getByTestId("cloudinary-image").getAttribute("src")).toBe(
      "/placeholder-bakery.png",
    );
  });

  test("Add to cart button is clickable", async () => {
    await composed.Default.run();
    const addButton = screen.getByTestId("add-to-cart-button");
    await userEvent.click(addButton);
    expect(addButton).toBeTruthy();
  });
});
