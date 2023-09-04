import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import {
  ArrowRightIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon as MiniPencilIcon,
  ArrowRightIcon as MiniArrowRightIcon,
} from "@heroicons/react/20/solid";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args} />
      <Button size="default" {...args} />
      <Button size="lg" {...args} />
    </div>
  ),
};

export const PrimaryWithLeftIcon: Story = {
  name: "Primary with left icon",
  args: {
    children: "Edit",
  },
  render: ({ children }) => (
    <div className="flex items-center gap-8">
      <Button size="sm">
        <MiniPencilIcon className="h-3 w-3" />
        {children}
      </Button>
      <Button size="default">
        <PencilIcon className="h-4 w-4" />
        {children}
      </Button>
      <Button size="lg">
        <PencilIcon className="h-4 w-4" />
        {children}
      </Button>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
  render: (args) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args} />
      <Button size="default" {...args} />
      <Button size="lg" {...args} />
    </div>
  ),
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
  render: (args) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args} />
      <Button size="default" {...args} />
      <Button size="lg" {...args} />
    </div>
  ),
};

export const OutlineWithRightIcon: Story = {
  name: "Outline with right icon",
  args: {
    variant: "outline",
    children: "Leave",
  },
  render: ({ children, ...args }) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args}>
        {children}
        <MiniArrowRightIcon className="h-3 w-3" />
      </Button>
      <Button size="default" {...args}>
        {children}
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
      <Button size="lg" {...args}>
        {children}
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
  render: (args) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args} />
      <Button size="default" {...args} />
      <Button size="lg" {...args} />
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
  render: (args) => (
    <div className="flex items-center gap-8">
      <Button size="sm" {...args} />
      <Button size="default" {...args} />
      <Button size="lg" {...args} />
    </div>
  ),
};

export const Icon: Story = {
  render: () => (
    <Button size="icon" variant="outline">
      <PlusIcon className="h-5 w-5" />
    </Button>
  ),
};

export const IconCircle: Story = {
  name: "Icon full rounded",
  render: () => (
    <Button size="icon" className="rounded-full">
      <PlusIcon className="h-5 w-5" />
    </Button>
  ),
};
