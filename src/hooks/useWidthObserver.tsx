import { MutableRefObject, useEffect } from "react";

export function useWidthObserver(
  sourceRef: MutableRefObject<HTMLElement>,
  onChange: (width: string) => void
) {
  useEffect(() => {
    const element = sourceRef.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
      const width = element.offsetWidth + "px";
      onChange(width);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sourceRef, onChange]);
}
