import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Heading",
  component: Heading,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children: "Some nice heading",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
  },
};
