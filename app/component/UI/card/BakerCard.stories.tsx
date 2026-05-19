// app/component/UI/card/BakerCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { BakerCard } from "./BakerCard";

const meta: Meta<typeof BakerCard> = {
  title: "UI/Cards/BakerCard", // Consistency: PascalCase
  component: BakerCard,
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
type Story = StoryObj<typeof BakerCard>;

const mockBaker = {
  id: "cmnpnkqza0000l4v69tysrxls",
  name: "Sandhya Mishra",
  slug: "sandhya-mandi",
  images: ["sandhya"],
  specialty: "Traditional Sourdough & Millet Breads",
  experience: "Baker since 2012",
  location: "Indiranagar, Bangalore",
  description:
    "Sandhya started baking to provide healthy, preservative-free bread for her family.",
  rating: 4.9,
  createdAt: "2026-04-08 06:14:17.494",
};

// 1. The "Happy Path" Story
export const Default: Story = {
  args: {
    baker: mockBaker,
  },
};

// 2. Documenting Style: Featured State
// This documents how the UI changes (e.g., a gold border or a badge)
export const Featured: Story = {
  args: {
    baker: {
      ...mockBaker,
      name: "Featured Baker: Sandhya Mishra",
    },
  },
};

// 3. Documenting Style: Content Overflow
// Crucial for Architects - how does the card handle too much text?
export const LongBio: Story = {
  args: {
    baker: {
      ...mockBaker,
      name: "Chef Alexandra Montgomery-Clarington III",
      description:
        "This is an exceptionally long bio intended to test the line-clamping and container overflow logic of the BakerCard component to ensure it doesn't break the grid layout.",
    },
  },
};

// 4. Documenting Style: Visual Fallbacks
export const MissingImage: Story = {
  args: {
    baker: {
      ...mockBaker,
      images: [], // Testing the avatar fallback style
    },
  },
};

// 5. Documenting Style: Responsive Widths
export const MobileConstrained: Story = {
  args: {
    baker: mockBaker,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};
