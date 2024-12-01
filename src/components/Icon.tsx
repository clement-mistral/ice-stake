import Icons from "../assets/icons.svg";

type IconProps = {
  icon: string;
  className: string;
};

type LoaderProps = {
  size?: "small" | "medium" | "large";
};

export default function Icon({ icon, className }: IconProps) {
  return (
    <svg role="img" className={className}>
      <title>{icon} Icon</title>
      <use href={`${Icons}#icon-${icon}`} />
    </svg>
  );
}

export function Loader({ size }: LoaderProps) {
  return (
    <svg role="img" className={`${size} loader-icon`}>
      <title>Loader Icon</title>
      <use href={`${Icons}#icon-loader`} />
    </svg>
  );
}
