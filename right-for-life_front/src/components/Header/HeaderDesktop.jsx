import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { HeaderButton } from "./HeaderButton.jsx";
import { HeaderLink } from "./HeaderLink.jsx";
import React from "react";

export const HeaderDesktop = () => (
  <nav className="hidden lg:block">
    <ul
      className="fixed flex justify-center items-center w-full bg-white shadow-md font-bold text-xl text-gray-600 z-40 h-16">
      <NavLink
        className="mx-2 cursor-pointer"
        exact
        to="/"
        activeClassName="text-gray-700"
      >
        <img width="40px" src={logo} alt="logo"/>
      </NavLink>

      <HeaderButton to="/help" title="Помощь" color="green"/>
      <HeaderLink to="/animals" title="Питомцы"/>
      <HeaderLink to="/stories" title="Счастливые истории"/>

      <HeaderButton to="/emergency" title="Срочники" color="red"/>
      <HeaderLink to="/news" title="Новости"/>
      <HeaderLink to="/about" title="О нас"/>
    </ul>
  </nav>
);