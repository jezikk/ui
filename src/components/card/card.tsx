import { tv } from "tailwind-variants";

const cardVariants = tv({
  slots: {
    wrapper:
      "border border-border shadow rounded-lg bg-card text-card-foreground",
    header: "p-6",
    content: "p-6",
    footer: "p-6",
  },
});

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <div className={cardVariants().wrapper({ class: props.className })}>
      {props.children}
    </div>
  );
}

export function CardHeader(props: CardProps) {
  return (
    <div className={cardVariants().header({ class: props.className })}>
      {props.children}
    </div>
  );
}

export function CardContent(props: CardProps) {
  return (
    <div className={cardVariants().content({ class: props.className })}>
      {props.children}
    </div>
  );
}

export function CardFooter(props: CardProps) {
  return (
    <div className={cardVariants().footer({ class: props.className })}>
      {props.children}
    </div>
  );
}
