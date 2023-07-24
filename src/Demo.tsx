import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "./components/button";
import { Card, CardContent, CardHeader } from "./components/card";
import { Heading } from "./components/heading";
import { NumberField } from "./components/number-field";
import { Paragraph } from "./components/paragraph";
import { SelectField, SelectItem } from "./components/select-field";
import { Tab, TabList, TabPanel, Tabs } from "./components/tabs";
import { TextField } from "./components/text-field";
import {
  MultiSelectField,
  MultiSelectItem,
} from "./components/multiselect-field";

export function Demo() {
  return (
    <div className="p-12">
      <Card>
        <Tabs>
          <CardHeader className="border-b border-b-border">
            <TabList>
              <Tab id="typography">Typography</Tab>
              <Tab id="buttons">Buttons</Tab>
              <Tab id="form">Form</Tab>
            </TabList>
          </CardHeader>
          <CardContent>
            <TabPanel id="typography">
              <Heading variant="h1">Buttons</Heading>
              <Paragraph>This section describes variants of buttons</Paragraph>
            </TabPanel>

            <TabPanel id="buttons">
              <Heading variant="h1">Buttons</Heading>
              <Paragraph>This section describes variants of buttons</Paragraph>
              <div className="mt-4 flex items-center gap-4">
                <Button>Primarty</Button>
                <Button variant="secondary">Secondary</Button>
                <Button size="icon" aria-label="Send">
                  <EnvelopeIcon className="h-5 w-5" aria-hidden={true} />
                </Button>
              </div>
            </TabPanel>

            <TabPanel id="form">
              <Heading as="h1" variant="h2">
                Inputs
              </Heading>
              <Paragraph>
                This section describes variants of input fields
              </Paragraph>
              <div className="mt-4 flex max-w-xs flex-col gap-8">
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
                <SelectField label="Select field" placeholder="Select an item">
                  <SelectItem>Red</SelectItem>
                  <SelectItem>Green</SelectItem>
                  <SelectItem>Blue</SelectItem>
                </SelectField>

                <MultiSelectField
                  label="MultiSelect field"
                  placeholder="Select an items"
                >
                  <MultiSelectItem>Red</MultiSelectItem>
                  <MultiSelectItem>Green</MultiSelectItem>
                  <MultiSelectItem>Blue</MultiSelectItem>
                </MultiSelectField>
              </div>
            </TabPanel>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
