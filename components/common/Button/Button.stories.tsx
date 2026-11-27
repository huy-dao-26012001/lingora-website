// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Button from "./index";

const meta = {
  component: Button,
  argTypes: {
    variants: {
      options: ["default", "primary", "surface"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variants: "primary",
    children: "Primary",
    onClick: () => alert("Primary button clicked!"),
  },
};
