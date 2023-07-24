import {
  SeparatorProps as RASeparatorProps,
  Separator as RASeparator,
} from "react-aria-components";
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

interface SeparatorProps extends RASeparatorProps {
  className?: string;
}

export function Separator({
  className,
  orientation = "vertical",
  ...props
}: SeparatorProps) {
  return (
    <RASeparator
      {...props}
      orientation={orientation}
      className={separatorVariants({ orientation, className })}
    />
  );
}
