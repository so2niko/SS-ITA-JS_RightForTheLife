import React from "react";
import { AnimalsList } from "../../components/AnimalsList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const AnimalsPage = ({ data }) => {
	return (
		<div className="animals-page bg-lightgray-100 min-h-screen pt-16 pb-2">
			<AnimalsList animals={data} />
		</div>
	);
};

const dataApi = 'https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json';
const wrappedComponent = withFetchDataIndicators(AnimalsPage, dataApi);

export { wrappedComponent as AnimalsPage };
