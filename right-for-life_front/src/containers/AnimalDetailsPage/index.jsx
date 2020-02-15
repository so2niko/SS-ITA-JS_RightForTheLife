import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../rootConstants';
import { AnimalDetails } from './AnimalDetails';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import './style.css';

const AnimalDetailsPage = ({ match, data }) => {
  const petId = match.params.id;
  const petObj = data.find(animal => String(animal._id) === petId);

  return petObj ? (
    <AnimalDetails {...petObj} />
  ) : (
    <ErrorIndicator
      message="Страница не найдена :("
      renderAction={() => <Link to="/animals">Вернуться на главную</Link>}
    />
  );
};
const wrappedComponent = withFetchDataIndicators(
  AnimalDetailsPage,
  API.ANIMALS,
);
export { wrappedComponent as AnimalDetailsPage };
