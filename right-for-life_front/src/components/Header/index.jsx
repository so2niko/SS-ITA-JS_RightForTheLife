import React from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  return (
    <header>
      <HeaderDesktop/>
      <HeaderMobile/>
    </header>
  );
};