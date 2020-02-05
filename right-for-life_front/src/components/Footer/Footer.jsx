import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.jpg";

export const Footer = () => {
	const iconsClassName = 'mx-2 text-3xl';

	return (
		<footer className="flex flex-shrink-0 justify-center items-center py-3 bg-white shadow-md font-bold text-xl text-gray-600 mb-16 lg:mb-0">
			<ul className="flex">
				<li>
					<a
						href="https://www.facebook.com/FOND.Mi.za.pravo.na.zhizn/?ref=page_internal"
						target="_blank"
						rel='noopener noreferrer'
					>
						<i className={`fab fa-facebook-square text-blue-700 ${iconsClassName}`}></i>
					</a>
				</li>
				<li>
					<a href="tel:093235037">
						<i className={`fas fa-phone-square-alt text-green-500 ${iconsClassName}`}></i>
					</a>
				</li>
				<li>
					<a href="mailto:olyaum76@gmail.com">
						<i className={`fas fa-envelope text-red-500 ${iconsClassName}`}></i>
					</a>
				</li>
			</ul>
			<span className="mx-24">Developed by group DP-180 Web-UI SoftServe Inc.</span>
			<NavLink
				className="mx-4 cursor-pointer text-gray-600 hover:text-gray-700"
				exact
				to="/reports"
				activeClassName="text-gray-700"
			>
				Отчеты
			</NavLink>
			<NavLink
				className="mx-4 cursor-pointer text-red-600 hover:text-red-700 select-none"
				exact
				to="/"
			>
				<img
					width="40px"
					src={logo}
					alt="logo"
				/>
			</NavLink>
		</footer>
	);
};