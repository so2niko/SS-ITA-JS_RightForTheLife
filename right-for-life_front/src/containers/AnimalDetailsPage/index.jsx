import React from 'react';
import CSSTransition from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { ANIMALS } from '../../rootConstants';
import { AnimalDetails } from './AnimalDetails.jsx';
import './style.css';


// todo: calculate  and format age
// todo: big image
// todo: забрать action
// todo: images slider

const AnimalDetailsPage = (props) => {
  const petId = props.match.params.id;
  const petObj = props.data.find(animal => String(animal._id) === petId);

  return petObj ?
    <CSSTransition
      transitionName="animal-details-card"
      transitionAppear={true}
      transitionAppearTimeout={200}
      transitionEnter={false}
      transitionLeave={false}>
      <AnimalDetails {...petObj} />
    </CSSTransition> :
    <ErrorIndicator
      message="Страница не найдена :("
      renderAction={() => <Link to="/">Вернуться на главную</Link>}
    />
};

const dataApi = `${BE_URL}/news`;
const wrappedComponent = withFetchDataIndicators(AnimalDetailsPage, ANIMALS, dataApi);

export { wrappedComponent as AnimalDetailsPage };