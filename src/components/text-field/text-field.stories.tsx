import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./text-field";
import { Label } from "../label";
import { Input } from "../input";
import { Description } from "../description";
import { ErrorMessage } from "../error-message";

const meta: Meta<typeof TextField> = {
  title: "Form/TextField",
  component: TextField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: "Value",
    description: "Description message",
    errorMessage: "Error message",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: (args) => (
    <TextField
      label={args.label}
      isRequired={true}
      placeholder={args.placeholder}
      description={args.description}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const EmptyDisabled: Story = {
  render: (args) => (
    <TextField
      label={args.label}
      isDisabled={true}
      placeholder={args.placeholder}
      description={args.description}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const Filled: Story = {
  render: (args) => (
    <TextField
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <TextField
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
      errorMessage={args.errorMessage}
      validationState="invalid"
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const InvalidEmpty: Story = {
  render: (args) => (
    <TextField
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      errorMessage={args.errorMessage}
      validationState="invalid"
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <TextField
      isDisabled={true}
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};

export const Readonly: Story = {
  render: (args) => (
    <TextField
      isReadOnly={true}
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </TextField>
  ),
};
