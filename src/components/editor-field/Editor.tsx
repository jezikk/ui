import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  createBoldPlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import {
  Plate,
  PlateLeaf,
  PlateProvider,
  createPlugins,
  withProps,
} from "@udecode/plate-common";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  createHeadingPlugin,
} from "@udecode/plate-heading";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { EditorToolbox } from "./EditorToolbox";
import { HeadingElement } from "./elements";

const plugins = createPlugins(
  [
    createHeadingPlugin(),
    createParagraphPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
  ],
  {
    components: {
      [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
      [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
      [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
      [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
      [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
      [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
      [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
      [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
    },
  }
);

export function Editor() {
  return (
    <PlateProvider plugins={plugins}>
      <EditorToolbox />
      <Plate />
    </PlateProvider>
  );
}
