import { NavLink } from "react-router-dom";
import React from "react";

export const HeaderItem = ({to, title, color, onClick}) => (
  <NavLink
    exact
    className="header-element flex justify-center py-2 cursor-pointer w-full"
    to={to}
    activeClassName="text-gray-700"
    onClick={onClick}>

    <div className={color ?
      `header-element text-${color}-700 bg-${color}-200 py-1 px-3 rounded-lg hover:bg-${color}-300 hover:text-${color}-800` :
      'header-element my-1 cursor-pointer hover:text-gray-700'}>
      {title}
    </div>

  </NavLink>
);
