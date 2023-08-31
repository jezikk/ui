import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  EnvelopeIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Button } from "./components/button";
import { Card, CardContent, CardHeader } from "./components/card";
import { Heading } from "./components/heading";
import { NumberField } from "./components/number-field";
import { Paragraph } from "./components/paragraph";
import {
  SelectField,
  SelectItem,
  MultiSelectField,
} from "./components/select-field";
import { Tab, TabList, TabPanel, Tabs } from "./components/tabs";
import { TextField } from "./components/text-field";
import { Link } from "./components/link";
import { Toggle, ToggleGroupField } from "./components/toggle-group-field";
import { Dialog, DialogConfirm, DialogTrigger } from "./components/dialog";
import { Modal } from "./components/modal";
import { SwitchField } from "./components/switch-field";
import { Menu, MenuItem, MenuSection, MenuTrigger } from "./components/menu";
import { Popover } from "./components/popover";

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
              <Tab id="dialogs">Dialogs</Tab>
              <Tab id="menu">Menu</Tab>
            </TabList>
          </CardHeader>
          <CardContent>
            <TabPanel id="typography" className="max-w-3xl space-y-8">
              <Heading variant="h1">Heading 1</Heading>
              <Heading variant="h2">Heading 2</Heading>
              <Heading variant="h3">Heading 3</Heading>
              <Heading variant="h4">Heading 4</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
                ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer lacinia. Cras pede libero, dapibus nec, pretium sit
                amet, <Link href="#">tempor quis</Link>.
              </Paragraph>
              <Paragraph variant="muted">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis
                ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer lacinia. Cras pede libero, dapibus nec, pretium sit
                amet, <Link href="#">tempor quis</Link>.
              </Paragraph>
            </TabPanel>

            <TabPanel id="buttons" className="space-y-8">
              <div>
                <Heading variant="h3">Primary</Heading>
                <div className="mt-4 flex items-center gap-4">
                  <Button
                    onPress={() => {
                      console.log("Press");
                    }}
                  >
                    Enabled
                  </Button>
                  <Button isDisabled>Disabled</Button>
                </div>
              </div>

              <div>
                <Heading variant="h3">Secondary</Heading>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="secondary">Enabled</Button>
                  <Button variant="secondary" isDisabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <Heading variant="h3">Outline</Heading>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="outline">Enabled</Button>
                  <Button variant="outline" isDisabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <Heading variant="h3">Ghost</Heading>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost">Enabled</Button>
                  <Button variant="ghost" isDisabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <Heading variant="h3">Sizes</Heading>
                <div className="mt-4 flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Send">
                    <EnvelopeIcon className="h-5 w-5" aria-hidden={true} />
                  </Button>
                  <Button
                    size="icon"
                    aria-label="Send"
                    className="rounded-full"
                  >
                    <EnvelopeIcon className="h-5 w-5" aria-hidden={true} />
                  </Button>
                </div>
              </div>
            </TabPanel>

            <TabPanel id="form" className="space-y-8">
              {/* Text fields */}
              <div>
                <Heading variant="h3">Text field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <TextField
                    label="Valid"
                    isRequired={true}
                    defaultValue="Hodnota"
                    description="Description message"
                    className="w-full"
                  />

                  <TextField
                    label="Invalid"
                    placeholder="Placeholder"
                    validationState="invalid"
                    description="Description message"
                    errorMessage="Error message"
                    className="w-full"
                  />

                  <TextField
                    label="Disabled"
                    isDisabled={true}
                    defaultValue="Hodnota"
                    className="w-full"
                  />

                  <TextField
                    label="Readonly"
                    isReadOnly={true}
                    defaultValue="Hodnota"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Number fields */}
              <div>
                <Heading variant="h3">Number field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <NumberField
                    label="Valid"
                    isRequired={true}
                    defaultValue={1000}
                    formatOptions={{ style: "currency", currency: "CZK" }}
                    description="Description message"
                    className="w-full"
                  />

                  <NumberField
                    label="Invalid"
                    placeholder="Placeholder"
                    formatOptions={{ style: "currency", currency: "CZK" }}
                    validationState="invalid"
                    description="Description message"
                    errorMessage="Error message"
                    className="w-full"
                  />

                  <NumberField
                    label="Disabled"
                    isDisabled={true}
                    defaultValue={1000}
                    formatOptions={{ style: "currency", currency: "CZK" }}
                    className="w-full"
                  />

                  <NumberField
                    label="Readonly"
                    isReadOnly={true}
                    defaultValue={1000}
                    formatOptions={{ style: "currency", currency: "CZK" }}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Select fields */}
              <div>
                <Heading variant="h3">Select field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <SelectField
                    label="Valid"
                    isRequired={true}
                    placeholder="Select an item"
                    description="Description message"
                    className="w-full"
                  >
                    <SelectItem>Red</SelectItem>
                    <SelectItem>Green</SelectItem>
                    <SelectItem>Blue</SelectItem>
                  </SelectField>

                  <SelectField
                    label="Invalid"
                    placeholder="Select an item"
                    validationState="invalid"
                    description="Description message"
                    errorMessage="Error message"
                    className="w-full"
                  >
                    <SelectItem>Red</SelectItem>
                    <SelectItem>Green</SelectItem>
                    <SelectItem>Blue</SelectItem>
                  </SelectField>

                  <SelectField
                    label="Disabled"
                    isDisabled={true}
                    placeholder="Select an item"
                    defaultSelectedKey="red"
                    className="w-full"
                  >
                    <SelectItem key="red">Red</SelectItem>
                    <SelectItem key="green">Green</SelectItem>
                    <SelectItem key="blue">Blue</SelectItem>
                  </SelectField>

                  <SelectField
                    label="Readonly"
                    isReadOnly={true}
                    placeholder="Select an item"
                    defaultSelectedKey="red"
                    className="w-full"
                  >
                    <SelectItem key="red">Red</SelectItem>
                    <SelectItem key="green">Green</SelectItem>
                    <SelectItem key="blue">Blue</SelectItem>
                  </SelectField>
                </div>
              </div>

              {/* Multiselect fields */}
              <div>
                <Heading variant="h3">Multiselect field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <MultiSelectField
                    label="Valid"
                    isRequired={true}
                    placeholder="Select an item"
                    description="Description message"
                    className="w-full"
                  >
                    <SelectItem>Red</SelectItem>
                    <SelectItem>Green</SelectItem>
                    <SelectItem>Blue</SelectItem>
                  </MultiSelectField>

                  <MultiSelectField
                    label="Invalid"
                    placeholder="Select an item"
                    validationState="invalid"
                    description="Description message"
                    errorMessage="Error message"
                    className="w-full"
                  >
                    <SelectItem>Red</SelectItem>
                    <SelectItem>Green</SelectItem>
                    <SelectItem>Blue</SelectItem>
                  </MultiSelectField>

                  <MultiSelectField
                    label="Disabled"
                    isDisabled={true}
                    placeholder="Select an item"
                    defaultSelectedKeys={["red"]}
                    className="w-full"
                  >
                    <SelectItem key="red">Red</SelectItem>
                    <SelectItem key="green">Green</SelectItem>
                    <SelectItem key="blue">Blue</SelectItem>
                  </MultiSelectField>

                  <MultiSelectField
                    label="Readonly"
                    isReadOnly={true}
                    placeholder="Select an item"
                    defaultSelectedKeys={["red"]}
                    className="w-full"
                  >
                    <SelectItem key="red">Red</SelectItem>
                    <SelectItem key="green">Green</SelectItem>
                    <SelectItem key="blue">Blue</SelectItem>
                  </MultiSelectField>
                </div>
              </div>

              {/* Toggle group fields */}
              <div>
                <Heading variant="h3">Toggle group field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <ToggleGroupField
                    label="Valid"
                    isRequired={true}
                    description="Description message"
                    defaultValue="red"
                    className="w-full"
                  >
                    <Toggle value="red">Red</Toggle>
                    <Toggle value="green">Green</Toggle>
                    <Toggle value="blue">Blue</Toggle>
                  </ToggleGroupField>

                  <ToggleGroupField
                    label="Invalid"
                    validationState="invalid"
                    description="Description message"
                    errorMessage="Error message"
                    className="w-full"
                  >
                    <Toggle value="red">Red</Toggle>
                    <Toggle value="green">Green</Toggle>
                    <Toggle value="blue">Blue</Toggle>
                  </ToggleGroupField>

                  <ToggleGroupField
                    label="Disabled"
                    isDisabled={true}
                    defaultValue="red"
                    className="w-full"
                  >
                    <Toggle value="red">Red</Toggle>
                    <Toggle value="green">Green</Toggle>
                    <Toggle value="blue">Blue</Toggle>
                  </ToggleGroupField>

                  <ToggleGroupField
                    label="Readonly"
                    isReadOnly={true}
                    defaultValue="green"
                    className="w-full"
                  >
                    <Toggle value="red">Red</Toggle>
                    <Toggle value="green">Green</Toggle>
                    <Toggle value="blue">Blue</Toggle>
                  </ToggleGroupField>
                </div>
              </div>

              {/* <div>
                <Heading variant="h3">Switch field</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <SwitchField>Dark mode</SwitchField>
                </div>
              </div> */}
            </TabPanel>

            <TabPanel id="dialogs" className="space-y-8">
              <div>
                <Heading variant="h3">Information dialog</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <DialogTrigger>
                    <Button>Open</Button>
                    <Modal>
                      <Dialog>
                        {({ close }) => (
                          <>
                            <Heading as="h2" variant="h3">
                              Payment successful
                            </Heading>
                            <Paragraph variant="muted">
                              Your payment has been successfully submitted.
                              We’ve sent you an email with all of the details of
                              your order.
                            </Paragraph>
                            <Button onPress={close}>Confirm</Button>
                          </>
                        )}
                      </Dialog>
                    </Modal>
                  </DialogTrigger>
                </div>
              </div>

              <div>
                <Heading variant="h3">Confirm dialog</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <DialogTrigger>
                    <Button>Open</Button>
                    <Modal>
                      <DialogConfirm
                        title="Remove item"
                        description="Are you sure you want to remove the item? All data will be permanently removed from server."
                        confirmButton="Remove"
                        onConfirm={() => console.log("Confirm")}
                      />
                    </Modal>
                  </DialogTrigger>
                </div>
              </div>
            </TabPanel>

            <TabPanel id="menu" className="space-y-8">
              <div>
                <Heading variant="h3">Menu</Heading>
                <div className="mt-4 flex w-full items-start gap-8">
                  <MenuTrigger>
                    <Button>Menu</Button>
                    <Popover>
                      <Menu
                        aria-label="Actions"
                        onAction={(key) => console.log(key)}
                      >
                        <MenuItem key="edit" textValue="Edit">
                          <PencilSquareIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </MenuItem>
                        <MenuItem key="settings" textValue="Settings">
                          <Cog8ToothIcon className="h-4 w-4" />
                          <span>Settings</span>
                        </MenuItem>
                        <MenuSection>
                          <MenuItem key="destroy_logout" textValue="Log out">
                            <ArrowRightOnRectangleIcon className="h-4 w-4" />
                            <span>Log out</span>
                          </MenuItem>
                        </MenuSection>
                      </Menu>
                    </Popover>
                  </MenuTrigger>
                </div>
              </div>
            </TabPanel>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
