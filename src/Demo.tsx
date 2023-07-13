import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { NumberField } from "./components/number-field";
import { Paragraph } from "./components/paragraph";
import { SelectField, SelectItem } from "./components/select-field";
import { TextField } from "./components/text-field";

export function Demo() {
  return (
    <div className="p-12">
      <Heading variant="h1">Buttons</Heading>
      <Paragraph>This section describes variants of buttons</Paragraph>
      <div className="mt-4 flex items-center gap-4">
        <Button>Primarty</Button>
        <Button variant="secondary">Secondary</Button>
        <Button size="icon" aria-label="Send">
          <EnvelopeIcon className="h-5 w-5" aria-hidden={true} />
        </Button>
      </div>

      <Heading as="h1" variant="h2" className="mt-12">
        Inputs
      </Heading>
      <Paragraph>This section describes variants of input fields</Paragraph>
      <div className="mt-4 flex max-w-xs flex-col gap-4">
        <TextField
          label="Paragraph field"
          isRequired={true}
          defaultValue="Hodnota"
        />
        <NumberField
          label="Number field"
          isRequired={true}
          defaultValue={1000}
          formatOptions={{ style: "currency", currency: "CZK" }}
        />
        <SelectField label="Select field">
          <SelectItem>Red</SelectItem>
          <SelectItem>Green</SelectItem>
          <SelectItem>Blue</SelectItem>
        </SelectField>
      </div>
    </div>
  );
}
