import React from 'react';
import AnimalCard from '../components/AnimalCard';

const AnimalsList = ({animals}) => {
  return (
    <ul className="flex flex-wrap justify-center pt-20">
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id.toString()} animal={animal} />
        })
      }
    </ul>
  );
}

export default AnimalsList;