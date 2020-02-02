import React from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import './style.css';

export const Header = () => {
  return (
    <header>
      <HeaderDesktop/>
      <HeaderMobile/>
    </header>
  );
};