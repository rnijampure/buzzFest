// app/component/UI/card/ProductCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "UI/Cards/ProductCard", // Consistency: PascalCase
  component: ProductCard,
  parameters: {
    layout: "centered",
    // Documenting background compatibility
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "subtle", value: "#f4f4f5" }, // zinc-100
      ],
    },
  },
  tags: ["autodocs", "test"],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const mockProduct = {
  id: "cmnpnl4nd00132wv6w9u4ubkw",
  name: "Lavender Lemonade Drop",
  slug: "Lavender-lemonade-drop",
  description: "Chef special handcrafted item",
  price: "100.00",
  category: ["cake", "signature", "vegan", "sugar-free"],
  starRating: 4.2,
  images: ["birthday-cake-7853211_960_720_n8efls"],
  createdAt: "2026-04-08 06:14:35.209",
  updatedAt: "2026-04-08 06:14:35.209",
  creatorSlug: "sandhya-mandi",
  isFeatured: true,
  isVeg: true,
  stock: 30,
};

// 1. The "Happy Path" Story
export const Default: Story = {
  args: {
    product: mockProduct,
  },
};

// 2. Documenting Style: Featured State
// This documents how the UI changes (e.g., a gold border or a badge)
export const Featured: Story = {
  args: {
    product: {
      ...mockProduct,
      isFeatured: true,
      isVeg: true,
    },
  },
};

// 3. Documenting Style: Content Overflow
// Crucial for Architects - how does the card handle too much text?
export const LongDesc: Story = {
  args: {
    product: {
      ...mockProduct,
      name: "Lavender Lemonade Drop",
      description:
        "This is an exceptionally long description intended to test the line-clamping and container overflow logic of the ProductCard component to ensure it doesn't break the grid layout.",
    },
  },
};

// 4. Documenting Style: Visual Fallbacks
export const MissingImage: Story = {
  args: {
    product: {
      ...mockProduct,
      images: [], // Testing the avatar fallback style
    },
  },
};

// 5. Documenting Style: Responsive Widths
export const MobileConstrained: Story = {
  args: {
    product: mockProduct,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};
