import { NavLink } from "react-router-dom";
import React from "react";

export const HeaderButton = ({to, title, color}) => (
  <NavLink
    className={`header-element mx-3 cursor-pointer text-${color}-700 bg-${color}-200 py-1 px-3 rounded-lg hover:bg-${color}-300 hover:text-${color}-800`}
    exact
    to={to}
    activeClassName={`bg-${color}-300 text-${color}-800`}
  >
    {title}
  </NavLink>
);