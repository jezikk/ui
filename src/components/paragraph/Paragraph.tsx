import { VariantProps, tv } from "tailwind-variants";

const paragraphVariant = tv({
  base: "text-foreground",
  variants: {
    variant: {
      default: "leading-7",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariant> {
  children: React.ReactNode;
}

export function Paragraph({ className, variant, ...props }: ParagraphProps) {
  return <p {...props} className={paragraphVariant({ className, variant })} />;
}
