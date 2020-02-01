import { NavLink } from "react-router-dom";
import React from "react";

export const HeaderLink = ({to, title}) => (
  <NavLink
    exact
    className="header-element mx-4 cursor-pointer hover:text-gray-700"
    to={to}
    activeClassName="text-gray-700">
    {title}
  </NavLink>
);