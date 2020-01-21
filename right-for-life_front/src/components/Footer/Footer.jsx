import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Footer = () => {
	return (
		<footer>
			<ul className="flex justify-center items-center py-2 bg-white shadow-md font-bold text-xl text-gray-600">
				<li className="ml-24">0932350370</li>
				<li className="mx-6">
					<Logo />
				</li>
				<li>olyaum76@gmail.com</li>
			</ul>
		</footer>
	);
};
