import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent } from "./card";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>Some text</CardContent>
    </Card>
  ),
};
