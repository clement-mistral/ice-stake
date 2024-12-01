import type { MouseEventHandler, ReactNode } from "react";
import { Loader } from "./Icon";

type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  disabled,
  loading,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${disabled ? "bg-gray-500" : "bg-blue-600 active:scale-95 transition-transform"} min-w-64 px-6 py-3 rounded-full flex items-center gap-4 ${loading ? "justify-center" : ""}`}
      onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
