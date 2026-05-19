import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
import { Buffer } from "buffer";

// Polyfill Buffer for the browser environment
if (typeof window !== "undefined") {
  window.Buffer = window.Buffer || Buffer;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
