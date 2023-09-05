import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "./error-message";

const meta: Meta<typeof ErrorMessage> = {
  title: "Form/Error message",
  component: ErrorMessage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Some error message",
  },
};
