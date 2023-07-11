import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Toolbox(props: Props) {
  return (
    <div
      className={cn(
        "flex items-center border border-gray-300 px-2 py-1",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
