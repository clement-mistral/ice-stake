import type { ReactNode } from "react";
import Icon from "../components/Icon";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  size?: "medium" | "large";
};

export default function Modal({
  isOpen,
  children,
  onClose,
  title,
  size,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onKeyDown={onClose} onClick={onClose}>
      <div
        className={`modal-content ${size ? size : ""}`}
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button type="button" className="modal-close" onClick={onClose}>
            <Icon icon="close" className="close-icon" />
          </button>
        </div>
        <div className="container pt-6 w-full">{children}</div>
      </div>
    </div>
  );
}
