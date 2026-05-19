// app/component/UI/CardImage.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CardImage } from "./CardImage";

const meta: Meta<typeof CardImage> = {
  title: "UI/Card/Atoms/CardImage",
  component: CardImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "test"],
  // Constrain the width for the preview so it looks like a card
  decorators: [
    (Story) => (
      <div className="w-[320px] border border-dashed border-zinc-300 p-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  args: {
    src: "main-sample", // Mock Cloudinary ID
    alt: "Delicious Chocolate Cupcake",
    aspectRatio: "aspect-4/3",
  },
};

export const SquareRatio: Story = {
  args: {
    ...Default.args,
    aspectRatio: "aspect-square",
  },
};

export const VideoRatio: Story = {
  args: {
    ...Default.args,
    aspectRatio: "aspect-video",
  },
};

export const MissingImage: Story = {
  args: {
    alt: "Broken Image Test",
    src: "", // Testing the fallback guard
  },
};

/**
 * Use this to test the hover scale effect
 * hover over the image in Storybook!
 */
export const HoverEffectTest: Story = {
  args: {
    ...Default.args,
  },
};
