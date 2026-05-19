import type { StorybookConfig } from "@storybook/nextjs-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  // Corrected path to match your app structure
  stories: ["../app/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        // Use this safer version for process
        "process.env": JSON.stringify({}),
        // Only define global if it's actually missing
        global: "window",
      },
      optimizeDeps: {
        // Add BakerCard's heavy dependencies here if it uses things like Lucide or Radix
        include: ["lucide-react", "@radix-ui/react-dialog"],
      },
    });
  },
};

export default config;
