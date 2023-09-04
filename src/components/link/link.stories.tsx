import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";
import { Paragraph } from "../paragraph";

const meta: Meta<typeof Link> = {
  title: "Primitives/Link",
  component: Link,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Paragraph>
        This is a standard text <Link href="#">and this is a link</Link>.
      </Paragraph>
    </div>
  ),
};

export const Muted: Story = {
  render: () => (
    <div>
      <Paragraph variant="muted">
        This is a standard text <Link href="#">and this is a link</Link>.
      </Paragraph>
    </div>
  ),
};
