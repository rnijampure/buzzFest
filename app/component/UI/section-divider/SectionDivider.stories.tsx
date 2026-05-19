import type { Meta, StoryObj } from "@storybook/react";
import SectionDivider from "./SectionDivider";

const meta: Meta<typeof SectionDivider> = {
  title: "Typography/SectionDivider",
  component: SectionDivider,
  parameters: {
    layout: "fullscreen", // Use fullscreen to see the divider span the whole width
  },
  decorators: [
    (Story) => (
      /* 
         In image_ace4a2.jpg, the background is white.
         We add padding (p-20) so the line doesn't touch the edge of your screen.
      */
      <div
        className="bg-white p-20 w-full min-h-[200px] flex items-center"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
  // ... rest of your argTypes
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InDemand: Story = {
  args: {
    title: "In Demand",
    align: "center",
  },
};
