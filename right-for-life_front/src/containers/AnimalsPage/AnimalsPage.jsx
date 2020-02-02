import React from "react";
import { Filters } from "../../components/Filters";
import { AnimalsList } from "../../components/AnimalsList";

export const AnimalsPage = () => {
  const filters = [['breed', 'dog'], ['breed', 'cat'], ['gender', 'mars'], ['gender', 'venus']];

  return (
    <div className="animals-page -mx-4">
      <h2 className="mb-6 px-4 font-bold text-lightgray-700 text-4xl uppercase">Питомцы</h2>
      <Filters filters={filters} />
      <AnimalsList />
    </div>
  );
};
