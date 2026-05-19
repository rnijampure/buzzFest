import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating"; // Adjusted path based on your folder move

const meta: Meta<typeof StarRating> = {
  title: "UI/Atoms/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "test"],
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const PerfectScore: Story = {
  args: {
    rating: 5,
  },
};

export const ZeroRating: Story = {
  args: {
    rating: 0,
  },
};

export const MissingData: Story = {
  args: {
    rating: undefined,
  },
};
