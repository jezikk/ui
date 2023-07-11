import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const titleVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-2xl font-semibold tracking-tight",
      h3: "text-xl font-semibold tracking-tight",
      h4: "text-lg font-semibold tracking-tight",
      h5: "text-lg font-semibold tracking-tight",
      h6: "text-base font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

export function Title({ variant, className, ...props }: TitleProps) {
  const Element = variant!;

  return (
    <Element {...props} className={cn(titleVariants({ variant }), className)} />
  );
}
