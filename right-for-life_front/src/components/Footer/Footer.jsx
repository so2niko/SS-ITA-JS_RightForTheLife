import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.jpg";

// export const Footer = () => {
// 	return (
// 		<footer className="flex-shrink-0">
// 			<ul className="flex justify-center items-center py-2 bg-white shadow-md font-bold text-xl text-gray-600">
// 				<li className="ml-24">0932350370</li>
// 				<li className="mx-6">
// 					<img width="40px" src={logo} alt="logo" />
// 				</li>
// 				<li>olyaum76@gmail.com</li>
// 			</ul>
// 		</footer>
// 	);
// };

export const Footer = () => {
	const iconsClassName = 'mx-2 text-3xl';

	return (
		<footer className="flex flex-shrink-0 justify-around py-3 bg-white shadow-md font-bold text-xl text-gray-600">
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
			<span>Все права защищены (нет) SoftServe Inc.</span>
			<NavLink
				className="mx-4 cursor-pointer text-red-600 hover:text-red-700 select-none"
				exact
				to="/help"
			>
				Помочь
			</NavLink>
			{/* <button className="font-bold">Помочь</button> */}
		</footer>
	);
};