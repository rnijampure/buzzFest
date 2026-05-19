import type { Meta, StoryObj } from "@storybook/react";
import { BaseCardSkeleton } from "./BaseCardSkeleton";

const meta: Meta<typeof BaseCardSkeleton> = {
  title: "UI/Cards/BaseCardSkeleton",
  component: BaseCardSkeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs", "test"],
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BaseCardSkeleton>;

export const Default: Story = {
  args: {
    hasAction: false,
    lines: 2,
  },
};

export const WithAction: Story = {
  args: {
    hasAction: true,
    lines: 2,
  },
};

export const LoadingDense: Story = {
  args: {
    hasAction: true,
    lines: 4,
  },
};
