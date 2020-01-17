import React from "react";
import logo from "../../assets/logo.svg";

export const Header = () => {
	return (
		<ul className="fixed w-full h-16 bg-lightgray-100 shadow-md flex justify-center items-center font-bold text-2xl text-gray-600 z-50">
			<li className="mx-4 cursor-pointer ">
				<img src={logo} alt="logo" />
			</li>
			<li className="mx-4 cursor-pointer hover:text-gray-700">Новости</li>
			<li className="mx-4 cursor-pointer hover:text-gray-700">Питомцы</li>
			<li className="mx-4 cursor-pointer hover:text-gray-700">Товары</li>
			<li className="mx-4 cursor-pointer hover:text-gray-700">
				Счастливые истории
			</li>
		</ul>
	);
};
