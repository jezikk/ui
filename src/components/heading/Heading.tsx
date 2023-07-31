import { useContextProps } from "@/hooks/useContextProps";
import { VariantProps, tv } from "tailwind-variants";
import { HeadingContext } from "./HeadingProvider";

const headingVariants = tv({
  base: "scroll-m-20",
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export function Heading({ variant, className, as, ...props }: HeadingProps) {
  const Element = as ? as : variant!;
  const [{ level, ...ctxProps }] = useContextProps(props, null, HeadingContext);
  const mergedProps = as === `h${level}` ? ctxProps : props;

  return (
    <Element
      {...mergedProps}
      className={headingVariants({ variant, className })}
    />
  );
}
