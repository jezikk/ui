import type { Meta, StoryObj } from "@storybook/react";

import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Form/Description",
  component: Description,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some description message",
  },
};
