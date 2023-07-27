import { useSeparator, SeparatorProps as AriaSeparatorProps } from "react-aria";
import { tv } from "tailwind-variants";

const separatorVariants = tv({
  base: "bg-border",
  variants: {
    orientation: {
      vertical: "mx-1 h-full w-[1px]",
      horizontal: "my-1 h-[1px] w-full",
    },
  },
});

interface SeparatorProps extends AriaSeparatorProps {
  className?: string;
}

export function Separator({
  className,
  orientation = "vertical",
  ...props
}: SeparatorProps) {
  const { separatorProps } = useSeparator({ ...props, orientation });
  return (
    <div
      {...separatorProps}
      className={separatorVariants({ orientation, className })}
    />
  );
}
