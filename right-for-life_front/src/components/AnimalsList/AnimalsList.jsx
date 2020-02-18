import React from 'react';
import { API } from '../../rootConstants';
import { withPagination } from '../../hoc/withPagination';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { AnimalCard } from '../AnimalCard/AnimalCard';

const AnimalsList = ({ data: { docs: animals } }) => {
  return (
    <ul className="flex flex-wrap justify-center mb-8">
      {animals.map(animal => (
        <AnimalCard key={animal._id} animal={animal} />
      ))}
    </ul>
  );
};

const wrappedComponent = withFetchDataIndicators(
  AnimalsList,
  API.ANIMALS,
  true,
);

export { wrappedComponent as AnimalsList };
