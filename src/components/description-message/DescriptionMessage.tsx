import { cn } from "@/lib/utils";
import { Text, TextProps } from "react-aria-components";

interface Props extends TextProps {
  children: React.ReactNode;
  isHidden?: boolean;
  className?: string;
}

export function DescriptionMessage({ className, isHidden, ...props }: Props) {
  if (!props.children) return null;
  return (
    <Text
      slot="description"
      {...props}
      className={cn(
        "text-sm text-muted-foreground",
        isHidden && "hidden",
        className,
      )}
    >
      {props.children}
    </Text>
  );
}
