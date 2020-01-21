import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className="fixed flex justify-center items-center py-2 w-full bg-white shadow-md font-bold text-xl text-gray-600 z-50">
					<li className="mx-4 cursor-pointer ">
						<Logo />
					</li>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/"
						activeClassName="text-gray-700"
					>
						Новости
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/animals"
						activeClassName="text-gray-700"
					>
						Питомцы
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/supplies"
						activeClassName="text-gray-700"
					>
						Товары
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/stories"
						activeClassName="text-gray-700"
					>
						Счастливые истории
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};
