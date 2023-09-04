import type { Meta, StoryObj } from "@storybook/react";

import { DescriptionMessage } from "./description-message";

const meta: Meta<typeof DescriptionMessage> = {
  title: "Form/Description",
  component: DescriptionMessage,
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
