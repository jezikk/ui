import { Separator } from "@/components/separator";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  noSeparator?: boolean;
  children: React.ReactNode;
}

export function ToolboxGroup({
  className,
  children,
  noSeparator = false,
}: Props) {
  return (
    <>
      <div className={cn("flex flex-nowrap items-center", className)}>
        {children}
      </div>
      {!noSeparator && <Separator />}
    </>
  );
}
