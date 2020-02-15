import React from 'react';
import logo from '../../../assets/logo.jpg';

export const HeaderLayout = ({ onClick }) => (
  <ul
    onClick={onClick}
    role="button"
    className="header__mobile-menu fixed flex justify-center items-center w-full bg-white shadow-2xl z-40 h-16 bottom-0 cursor-pointer"
  >
    <div className="mx-2">
      <img width="40px" src={logo} alt="logo" />
    </div>
  </ul>
);
