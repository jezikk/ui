import {
  useMarkToolbarButton,
  useMarkToolbarButtonState,
} from "@udecode/plate-common";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  nodeType: string;
  clear?: string | string[];
}

export function ToolboxButton({ nodeType, clear, ...props }: Props) {
  const state = useMarkToolbarButtonState({ clear, nodeType });
  const {
    props: { pressed, ...buttonProps },
  } = useMarkToolbarButton(state);
  return (
    <button
      {...buttonProps}
      {...props}
      aria-pressed={pressed}
      className="border p-1 aria-pressed:text-red-600"
    />
  );
}
