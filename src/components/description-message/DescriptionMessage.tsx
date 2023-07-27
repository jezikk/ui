import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  isHidden?: boolean;
  className?: string;
}

export function DescriptionMessage({ className, isHidden, ...props }: Props) {
  if (!props.children) return null;
  return (
    <span
      {...props}
      className={cn(
        "text-sm text-muted-foreground",
        isHidden && "hidden",
        className,
      )}
    >
      {props.children}
    </span>
  );
}
