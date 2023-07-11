import { cn } from "@/lib/utils";
import { SeparatorProps, useSeparator } from "react-aria";

interface Props extends SeparatorProps {
  className?: string;
}

export function Separator({
  className,
  orientation = "vertical",
  ...props
}: Props) {
  const { separatorProps } = useSeparator({ ...props, orientation });
  return (
    <div
      {...separatorProps}
      className={cn(
        "bg-gray-600",
        orientation === "vertical"
          ? "mx-1 h-full w-[1px]"
          : "my-1 h-[1px] w-full",
        className
      )}
    />
  );
}
