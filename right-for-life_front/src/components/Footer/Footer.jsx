import React from "react";
import logo from "../../assets/logo.jpg";

export const Footer = () => {
	return (
		<footer>
			<ul className="flex justify-center items-center py-2 bg-white shadow-md font-bold text-xl text-gray-600">
				<li className="ml-24">0932350370</li>
				<li className="mx-6">
					<img width="40px" src={logo} alt="logo" />
				</li>
				<li>olyaum76@gmail.com</li>
			</ul>
		</footer>
	);
};
