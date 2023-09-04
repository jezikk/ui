import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Primitives/Paragraph",
  component: Paragraph,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu lacinia neque faucibus fringilla. Pellentesque sapien. Nulla pulvinar eleifend sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
  },
};
