import type { Meta, StoryObj } from "@storybook/react";

import { BakerCard } from "../../UI/card/BakerCard";

const mockBaker = {
  id: "cmnpnks200003l4v6c6xoaf2s",
  name: "Ananya Das",
  slug: "ananya-das",
  images: ["payal_vwvgkb"],
  specialty: "Vegan & Gluten-Free Pastries",
  experience: "Baker since 2020",
  location: "Whitefield, Bangalore",
  description: "Focused on inclusive baking for all dietary needs.",
  starRating: 4.7, // Matches the required prop in your interface
  rating: 4.7, // Matches your raw JSON data
  createdAt: "2026-04-08T06:14:18.888Z",
};

const BakersListPlaceholder = () => <div />;

const meta: Meta<typeof BakersListPlaceholder> = {
  title: "Components/Landing/BakersList",
  // 2. Use the placeholder to avoid importing the real Server Component
  component: BakersListPlaceholder,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
        <main className="flex-1 w-full flex flex-col items-center">
          <div className="flex flex-1 w-full flex-col">
            <Story />
          </div>
        </main>
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof BakersListPlaceholder>;

/**
 * Default Grid: 4 Atoms in an Organism
 * Tests responsiveness: 1 col (mobile) -> 4 cols (md).
 */
export const DefaultGrid: Story = {
  render: () => (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3">
      {[...Array(4)].map((_, i) => (
        <BakerCard
          key={i}
          baker={{
            ...mockBaker,
            id: `${mockBaker.id}-${i}`,
            name: `${mockBaker.name} ${i + 1}`,
          }}
        />
      ))}
    </section>
  ),
};

/**
 * Varied Content: Stress test for the "Atom"
 * Ensures that if one baker has a "novel" for a name, the whole grid row
 * doesn't become visually misaligned.
 */
export const VariedContent: Story = {
  render: () => (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3">
      <BakerCard baker={mockBaker} />
      <BakerCard
        baker={{
          ...mockBaker,
          name: "Chef Elizabeth Montgomery-Smythe III",
          specialty:
            "Artisan Sourdough, Gluten-Free French Macarons, and Multi-tiered Wedding Cakes",
        }}
      />
      <BakerCard baker={mockBaker} />
      <BakerCard baker={mockBaker} />
    </section>
  ),
};

/**
 * Empty State: The "Nothing Found" Scenario
 */
export const EmptyState: Story = {
  render: () => (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3">
      <div className="col-span-full flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
        <p className="text-gray-500 font-medium">
          No bakers available in Whitefield right now.
        </p>
        <p className="text-gray-400 text-sm">Try adjusting your filters.</p>
      </div>
    </section>
  ),
};
