import type { Meta, StoryObj } from "@storybook/react";

import { NumberField } from "./number-field";
import { Label } from "../label";
import { Input } from "../input";
import { Description } from "../description";
import { ErrorMessage } from "../error-message";

const meta: Meta<typeof NumberField> = {
  title: "Form/NumberField ",
  component: NumberField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: 10000,
    description: "Description message",
    errorMessage: "Error message",
    formatOptions: { style: "currency", currency: "CZK" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: (args) => (
    <NumberField
      label={args.label}
      isRequired={true}
      placeholder={args.placeholder}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const EmptyDisabled: Story = {
  render: (args) => (
    <NumberField
      label={args.label}
      isDisabled={true}
      placeholder={args.placeholder}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const Filled: Story = {
  render: (args) => (
    <NumberField
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <NumberField
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
      errorMessage={args.errorMessage}
      validationState="invalid"
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const InvalidEmpty: Story = {
  render: (args) => (
    <NumberField
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      errorMessage={args.errorMessage}
      validationState="invalid"
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <NumberField
      isDisabled={true}
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const DisabledEmpty: Story = {
  render: (args) => (
    <NumberField
      isDisabled={true}
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};

export const Readonly: Story = {
  render: (args) => (
    <NumberField
      isReadOnly={true}
      label={args.label}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
      description={args.description}
      formatOptions={args.formatOptions}
    >
      <Label />
      <Input />
      <Description />
      <ErrorMessage />
    </NumberField>
  ),
};
