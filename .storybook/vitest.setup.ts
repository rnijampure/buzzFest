import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react";
import * as preview from "./preview";

const annotations = setProjectAnnotations([preview.default]);

beforeAll(annotations.beforeAll);
