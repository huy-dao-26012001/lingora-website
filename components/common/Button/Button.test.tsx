import { describe, expect, it } from "vitest";
import { composeStories } from "@storybook/nextjs-vite";

import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

describe("Button", () => {
  it("should display the correct text", async () => {
    await Primary.run();
    expect(document.body.firstChild).toMatchSnapshot();
  });
});
