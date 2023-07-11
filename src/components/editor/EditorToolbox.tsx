import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { Toolbox } from "./toolbox/Toolbox";
import { ToolboxButton } from "./toolbox/ToolboxButton";
import { ToolboxGroup } from "./toolbox/ToolboxGroup";

interface Props {
  className?: string;
}

export function EditorToolbox(props: Props) {
  return (
    <Toolbox className={props.className}>
      <ToolboxGroup>
        <ToolboxButton nodeType={MARK_BOLD}>B</ToolboxButton>
        <ToolboxButton nodeType={MARK_ITALIC}>I</ToolboxButton>
        <ToolboxButton nodeType={MARK_UNDERLINE}>U</ToolboxButton>
      </ToolboxGroup>
    </Toolbox>
  );
}
