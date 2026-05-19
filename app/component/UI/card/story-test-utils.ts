import { composeStories } from "@storybook/react";
import { expect, test, describe } from "vitest";
import { screen } from "storybook/test";

// 1. Define a strict type that explicitly includes the required 'default' export meta object
type StoriesModuleWithMeta = {
  default: {
    title?: string;
    component?: any;
    [key: string]: any;
  };
  [key: string]: any;
};

/**
 * Runs a smoke test (`Story.run()`) for every composed story export.
 */
export function testAllStoryVariants(
  storiesModule: StoriesModuleWithMeta, // 2. Use the strict meta type here
  options?: {
    skip?: string[];
    only?: string[];
  },
) {
  // TypeScript is now happy because it knows for a fact that 'default' exists inside storiesModule
  const composed = composeStories(storiesModule);

  const storyNames = Object.keys(composed).filter((name) => {
    if (options?.skip?.includes(name)) return false;
    if (options?.only?.length) return options.only.includes(name);
    return true;
  });

  for (const storyName of storyNames) {
    const Story = composed[storyName];

    describe(storyName, () => {
      test("mounts via portable story pipeline", async () => {
        // Ensure the story runner executes properly
        if (
          typeof Story === "function" ||
          (Story && typeof (Story as any).run === "function")
        ) {
          await (Story as any).run();
          expect(document.body.querySelector("*")).toBeTruthy();
        }
      });
    });
  }
}

export { composeStories, screen, expect, test, describe };
