import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroupField } from "./toggle-group-field";
import { Label } from "../label";
import { Input } from "../input";
import { Description } from "../description";
import { ErrorMessage } from "../error-message";
import { ToggleGroup } from "./toggle-group";
import { Toggle } from "./toggle";

const meta: Meta<typeof ToggleGroupField> = {
  title: "Form/ToggleGroupField",
  component: ToggleGroupField,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Label",
    defaultValue: "red",
    description: "Description message",
    errorMessage: "Error message",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      isRequired={true}
      description={args.description}
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const EmptyDisabled: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      isDisabled={true}
      description={args.description}
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const Filled: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      description={args.description}
      defaultValue={args.defaultValue}
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const Invalid: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      description={args.description}
      defaultValue={args.defaultValue}
      errorMessage={args.errorMessage}
      validationState="invalid"
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const InvalidEmpty: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      description={args.description}
      errorMessage={args.errorMessage}
      validationState="invalid"
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      isDisabled={true}
      description={args.description}
      defaultValue={args.defaultValue}
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};

export const Readonly: Story = {
  render: (args) => (
    <ToggleGroupField
      label={args.label}
      isReadOnly={true}
      description={args.description}
      defaultValue={args.defaultValue}
      className="w-full"
    >
      <Label />
      <ToggleGroup>
        <Toggle value="red">Red</Toggle>
        <Toggle value="green">Green</Toggle>
        <Toggle value="blue">Blue</Toggle>
      </ToggleGroup>
      <Description />
      <ErrorMessage />
    </ToggleGroupField>
  ),
};
