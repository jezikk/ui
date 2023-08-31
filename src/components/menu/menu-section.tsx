import { AriaMenuSectionProps, useMenuSection, useSeparator } from "react-aria";
import { Node, TreeState } from "react-stately";
import { MenuItem } from "./menu-item";

interface MenuSectionProps extends AriaMenuSectionProps {
  className?: string;
  section: Node<object>;
  state: TreeState<object>;
}

export function MenuSection({ section, state, ...props }: MenuSectionProps) {
  const { headingProps, groupProps, itemProps } = useMenuSection(props);
  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li {...separatorProps} className="my-1 border-b border-b-border" />
      )}
      <li {...itemProps}>
        {section.rendered && <span {...headingProps}>{section.rendered}</span>}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}
