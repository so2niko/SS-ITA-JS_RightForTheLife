import React from 'react';
import { AnimalsList } from '../../components/AnimalsList';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { withPagination } from '../../hoc/withPagination';
import { ANIMALS } from '../../rootConstants';

const AnimalsPage = ({ data }) => {
	return (
		<div className="animals-page pb-8">
			<AnimalsList animals={data} />
		</div>
	);
};

const dataApi = `${BE_URL}/animals`;
const wrappedComponent = withFetchDataIndicators(withPagination(AnimalsPage, 8), ANIMALS, dataApi);

export { wrappedComponent as AnimalsPage };
