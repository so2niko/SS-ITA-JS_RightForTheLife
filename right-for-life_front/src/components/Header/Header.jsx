import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className="fixed flex justify-center items-center py-2 w-full bg-white shadow-md font-bold text-xl text-gray-600 z-50">
					<li className="mx-4 cursor-pointer ">
						<Logo />
					</li>
					<li className="mx-4 cursor-pointer hover:text-gray-700">Новости</li>
					<li className="mx-4 cursor-pointer hover:text-gray-700">Питомцы</li>
					<li className="mx-4 cursor-pointer hover:text-gray-700">Товары</li>
					<li className="mx-4 cursor-pointer hover:text-gray-700">
						Счастливые истории
					</li>
				</ul>
			</nav>
		</header>
	);
};
