import type { Meta, StoryObj } from "@storybook/react";
import { DoughnutCard } from "./DoughnutCard";

const meta: Meta<typeof DoughnutCard> = {
  title: "UI/Cards/DoughnutCard",
  component: DoughnutCard,
  parameters: { layout: "centered" },
  tags: ["autodocs", "test"],
  decorators: [
    (Story) => (
      <div className="relative h-56 w-80 border border-dashed border-border">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DoughnutCard>;

const baseArgs = {
  id: "doughnut-1",
  name: "Glazed Ring",
  stock: 12,
  images: ["doughnut-sample"],
  starRating: 4.5,
  creatorSlug: "sandhya-mandi",
  price: 120,
};

export const Default: Story = {
  args: baseArgs,
};

export const SoldOut: Story = {
  args: {
    ...baseArgs,
    stock: 0,
  },
};

export const LowStock: Story = {
  args: {
    ...baseArgs,
    stock: 2,
  },
};
