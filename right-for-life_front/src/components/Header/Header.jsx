import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className="fixed flex justify-center items-center py-2 w-full bg-white shadow-md font-bold text-xl text-gray-600 z-50">
					<NavLink
						className="mx-2 cursor-pointer"
						exact
						to="/"
						activeClassName="text-gray-700"
					>
						<img width="40px" src={logo} alt="logo" />
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer text-green-600 hover:text-green-700"
						exact
						to="/help"
						activeClassName="text-green-700"
					>
						Помощь
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
						to="/stories"
						activeClassName="text-gray-700"
					>
						Счастливые истории
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer text-red-600 hover:text-red-700"
						exact
						to="/emergency"
						activeClassName="text-red-700"
					>
						Срочники
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/news"
						activeClassName="text-gray-700"
					>
						Новости
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/about"
						activeClassName="text-gray-700"
					>
						О нас
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};
