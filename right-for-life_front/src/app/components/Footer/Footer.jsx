import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <ul className="h-16 bg-lightgray-100 shadow-md flex justify-center items-center font-bold text-2xl text-gray-600 mt-4">
      <li className="ml-32">0932350370</li>
      <li className="mx-6"><img src={logo} alt='logo' /></li>
      <li>olyaum76@gmail.com</li>
    </ul>
  );
}

export default Footer;