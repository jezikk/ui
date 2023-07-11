interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function ErrorMessage(props: Props) {
  if (!props.children) return null;
  return <div {...props}>{props.children}</div>;
}