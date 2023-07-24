import { Text, TextProps } from "react-aria-components";

interface Props extends TextProps {
  children?: React.ReactNode;
  className?: string;
}

export function DescriptionMessage(props: Props) {
  if (!props.children) return null;
  return (
    <Text slot="description" {...props}>
      {props.children}
    </Text>
  );
}
