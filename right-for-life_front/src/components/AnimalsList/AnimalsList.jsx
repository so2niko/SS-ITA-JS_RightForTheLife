import React from 'react';
import { AnimalCard } from '../../components/AnimalCard/AnimalCard';

export const AnimalsList = ({ animals }) => {
	return (
		<ul className="flex flex-wrap justify-center">
			{animals.map(animal => {
              return <AnimalCard key={animal._id} animal={animal} />;
			})}
		</ul>
	);
};
