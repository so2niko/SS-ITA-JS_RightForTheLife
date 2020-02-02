import { NavLink } from "react-router-dom";
import React from "react";

export const HeaderItem = ({to, title, color, onClick}) => (
  <div onClick={onClick} className="header-element flex justify-center py-2 cursor-pointer w-full">
    {color ? (
      <NavLink
        className={`header-element text-${color}-700 bg-${color}-200 py-1 px-3 rounded-lg hover:bg-${color}-300 hover:text-${color}-800`}
        exact
        to={to}
        activeClassName={`bg-${color}-300 text-${color}-800`}>
        {title}
      </NavLink>
    ) : (
      <NavLink
        exact
        className="header-element my-1 cursor-pointer hover:text-gray-700"
        to={to}
        activeClassName="text-gray-700">
        <div>{title}</div>
      </NavLink>
    )
    }
  </div>
);
