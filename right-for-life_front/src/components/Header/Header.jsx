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
						className="mx-3 cursor-pointer text-green-700 bg-green-200 py-1 px-3 rounded-lg hover:bg-green-300 hover:text-green-800"
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
						className="mx-3 cursor-pointer text-red-700 bg-red-200 py-1 px-3 rounded-lg hover:bg-red-300 hover:text-red-800"
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
