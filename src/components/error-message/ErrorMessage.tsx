import { Text, TextProps } from "react-aria-components";

interface Props extends TextProps {
  children?: React.ReactNode;
  className?: string;
}

export function ErrorMessage(props: Props) {
  if (!props.children) return null;
  return (
    <Text slot="errorMessage" {...props}>
      {props.children}
    </Text>
  );
}
