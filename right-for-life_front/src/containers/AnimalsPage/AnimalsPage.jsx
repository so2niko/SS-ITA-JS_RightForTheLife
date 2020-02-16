import React from 'react';
import { AnimalsList } from '../../components/AnimalsList';
import { Filters } from '../../components/Filters';
import { Select } from '../../components/Select';

export const AnimalsPage = () => {
  const filters = [
    ['type', 'пес'],
    ['type', 'кот'],
    ['gender', 'М'],
    ['gender', 'Ж'],
  ];

  return (
    <div className="animals-page -mx-4">
      <h2 className="mb-6 px-4 font-bold text-lightgray-700 text-4xl uppercase">
        Питомцы
      </h2>
      <Select
        classNames="fixed z-50 top-0 right-0 mr-10 mt-20"
        optAdd
      />
      <Filters filters={filters} />
      <AnimalsList />
    </div>
  );
};