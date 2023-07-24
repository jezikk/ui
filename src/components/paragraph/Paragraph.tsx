import { VariantProps, tv } from "tailwind-variants";

const paragraphVariant = tv({
  variants: {
    variant: {
      default: "leading-7",
      muted: "text-sm text-foreground-muted",
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

export function Paragraph({ className, ...props }: ParagraphProps) {
  return <p {...props} className={paragraphVariant({ className })} />;
}
