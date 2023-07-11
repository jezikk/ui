import { PlateElement, PlateElementProps } from "@udecode/plate-common";

interface Props extends PlateElementProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function HeadingElement({ variant, ...props }: Props) {
  const Element = variant;
  return (
    <PlateElement asChild {...props}>
      <Element />
    </PlateElement>
  );
}
