import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoadIndicator } from "../../components/LoadIndicator";

const sliderSettings = {
	className: "w-full h-80",
	dots: true,
	infinite: true,
	speed: 2500,
	autoplay: true,
	autoplaySpeed: 5000
};

export const HomePage = () => {
	const dataApi =
		"https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json";
	const [animals, setAnimals] = useState([]);

	useEffect(() => {
		fetch(dataApi)
			.then(result => result.json())
			.then(data => setAnimals(data));
	}, []);

	return (
		<article className="flex flex-col lg:flex-row flex-1 pb-8">
			<section className="w-full lg:w-2/3 p-5">
				<div className="h-80 flex items-center justify-center rounded-xl mb-4">
					<Slider {...sliderSettings}>
						{animals.map(animal => (
							<div>
								<div
									className="h-80 rounded-xl bg-cover bg-top"
									style={{ backgroundImage: "url(" + animal.photos[0] + ")" }}
								></div>
							</div>
						))}
					</Slider>
				</div>
				<article className="p-5">
					<h1 className="mb-3 text-3xl font-bold text-lightgray-700">
						Мини-приют "Мы за право на жизнь"
					</h1>
					<p className="mt-2 text-lightgray-800">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
						pariatur voluptates illo ipsum atque mollitia quod iusto laboriosam
						ex aliquid magni quae beatae voluptate quam nisi magnam est at
						corporis iste. Commodi natus expedita quasi, cupiditate error
						maiores eos ea libero at pariatur sint id inventore reprehenderit
						molestiae ducimus alias nemo reiciendis molestias iusto delectus
						odio consequuntur illo totam? Officiis, autem? Harum laboriosam.
						Commodi natus expedita quasi, cupiditate error maiores eos ea libero
						at pariatur sint id inventore reprehenderit.
					</p>
				</article>
			</section>
			<section className="w-full lg:w-1/3 h-72 lg:h-auto p-5">
				<div className="w-full h-full flex items-center justify-center font-bold text-3xl rounded-xl text-lightgray-500 bg-lightgray-200">
					<LoadIndicator message="Ищем последние новости..." />
				</div>
			</section>
		</article>
	);
};
