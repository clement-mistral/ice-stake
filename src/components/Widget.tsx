import type { ReactNode } from "react";

type WidgetProps = {
  children: ReactNode;
  className: string;
  contentClassName: string;
  title: string;
};

export default function Widget({
  children,
  className,
  title,
  contentClassName,
}: WidgetProps) {
  return (
    <div className={`widget ${className}`}>
      <h1 className="font-semibold text-lg">{title}</h1>
      <div className={`w-full ${contentClassName}`}>{children}</div>
    </div>
  );
}
