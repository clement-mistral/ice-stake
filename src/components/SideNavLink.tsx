import { NavLink } from "react-router-dom";

import Icon from "./Icon";

type NavLinkProps = {
  route: string;
  icon: string;
};

export default function SideNavLink({ route, icon }: NavLinkProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive ? "nav-link nav-link-active" : "nav-link"
      }
    >
      <Icon icon={icon} className="nav-icon" />
    </NavLink>
  );
}
