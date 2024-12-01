import type { MouseEventHandler } from "react";
import Icon from "./Icon";

type ButtonWidgetProps = {
  onClick: MouseEventHandler;
  title: string;
  icon: string;
};

export default function ButtonWidget({
  title,
  icon,
  onClick,
}: ButtonWidgetProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="widget widget-button flex flex-col items-center justify-center gap-4 transition-opacity"
    >
      <Icon icon={icon} className="button-widget-icon" />
      <p className="text-lg font-semibold">{title}</p>
    </button>
  );
}
