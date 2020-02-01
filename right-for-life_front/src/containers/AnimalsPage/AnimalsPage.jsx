import React from "react";
import { API } from "../../rootConstants";
import { AnimalsList } from "../../components/AnimalsList";
import { withPagination } from "../../hoc/withPagination";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const AnimalsPage = ({ data }) => {
  return (
    <div className="animals-page pb-8">
      <AnimalsList animals={data} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(
  withPagination(AnimalsPage, 8),
  API.ANIMALS,
  true
);

export { wrappedComponent as AnimalsPage };
