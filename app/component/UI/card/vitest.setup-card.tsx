import { vi } from "vitest";
import React from "react";

vi.mock("@/components/ui/CloudinaryImage", () => ({
  CloudinaryImage: ({
    src,
    alt,
    className,
  }: {
    src?: string;
    alt?: string;
    className?: string;
  }) => (
    <img
      src={src ?? ""}
      alt={alt ?? ""}
      className={className}
      data-testid="cloudinary-image"
    />
  ),
}));

vi.mock("../addToCartButton", () => ({
  default: function MockAddToCartButton({
    id,
    name,
  }: {
    id: string;
    name: string;
  }) {
    return (
      <button type="button" data-testid="add-to-cart-button" data-product-id={id}>
        Add to Cart — {name}
      </button>
    );
  },
}));
