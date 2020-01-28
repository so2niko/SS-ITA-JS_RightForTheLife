import React from "react";
import { ANIMALS } from '../../rootConstants';
import { AnimalsList } from "../../components/AnimalsList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const AnimalsPage = ({ data }) => {
	return (
		<div className="animals-page pb-8">
			<AnimalsList animals={data} />
		</div>
	);
};

const dataApi = 'https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json';
const wrappedComponent = withFetchDataIndicators(withPagination(AnimalsPage, 8), ANIMALS, dataApi);

export { wrappedComponent as AnimalsPage };
