import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(dirname, "."),
    },
  },
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "node",
          include: ["lib/**/*.test.ts"],
        },
      },
      {
        extends: true,
        plugins: [react()],
        test: {
          name: "cards",
          environment: "happy-dom",
          include: ["app/component/UI/card/**/*.test.tsx"],
          setupFiles: [
            path.join(dirname, ".storybook/vitest.setup.ts"),
            path.join(dirname, "app/component/UI/card/vitest.setup-card.tsx"),
          ],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
