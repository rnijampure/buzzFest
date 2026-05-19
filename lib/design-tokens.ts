/**
 * Semantic Tailwind classes backed by CSS variables in app/globals.css.
 * Import these in components and assert against them in unit tests / Storybook.
 */

export const brandClasses = {
  brown: {
    bg: "bg-brand-brown",
    text: "text-brand-brown",
    border: "border-brand-brown",
  },
  gold: {
    bg: "bg-brand-gold",
    text: "text-brand-gold",
  },
  amber: {
    bg: "bg-brand-amber",
    text: "text-brand-amber",
  },
  orangeDeep: {
    bg: "bg-brand-orange-deep",
    text: "text-brand-orange-deep",
  },
  green: {
    bg: "bg-brand-green",
    text: "text-brand-green",
  },
  greenLight: {
    bg: "bg-brand-green-light",
    text: "text-brand-green-light",
  },
  orange: {
    bg: "bg-brand-orange",
    text: "text-brand-orange",
  },
} as const;

/** Shared button variant class strings (used by components/ui/button.tsx). */
export const buttonVariantClasses = {
  brand:
    "bg-brand-brown text-primary-foreground hover:bg-brand-gold rounded-xl",
  secondary:
    "bg-brand-amber text-primary-foreground hover:bg-brand-orange-deep rounded-xl aria-expanded:bg-secondary aria-expanded:text-primary-foreground",
} as const;

/** CSS custom property names for SVG / inline styles. */
export const cssVars = {
  starFill: "--star-fill",
  starEmptyFill: "--star-empty-fill",
  starStrokeActive: "--star-stroke-active",
  starStrokeInactive: "--star-stroke-inactive",
} as const;
