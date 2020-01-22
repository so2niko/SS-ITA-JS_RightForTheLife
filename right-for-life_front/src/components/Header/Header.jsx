import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className="fixed flex justify-center items-center py-2 w-full bg-white shadow-md font-bold text-xl text-gray-600 z-50">
					<NavLink
						className="mx-4 cursor-pointer"
						exact
						to="/"
						activeClassName="text-gray-700"
					>
						<Logo />
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
						to="/news"
						activeClassName="text-gray-700"
					>
						Новости
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
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/help"
						activeClassName="text-gray-700"
					>
						Помощь
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer hover:text-gray-700"
						exact
						to="/about"
						activeClassName="text-gray-700"
					>
						О нас
					</NavLink>
					<NavLink
						className="mx-4 cursor-pointer text-red-600 hover:text-red-700"
						exact
						to="/urgent"
						activeClassName="text-red-700"
					>
						Срочная помощь
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};
