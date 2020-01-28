import React from "react";
import { AnimalDetails } from "./AnimalDetails.jsx";
import CSSTransition from 'react-addons-css-transition-group';
import './style.css'
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import { Link } from "react-router-dom";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import { ANIMALS } from "../../rootConstants"


// todo: calculate  and format age
// todo: big image
// todo: забрать action
// todo: images slider

const AnimalDetailsPage = (props) => {
  const petId = props.match.params.id;
  const petObj = props.data.find(animal => String(animal.id) === petId);

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

const dataApi = 'https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/animals.json';
const wrappedComponent = withFetchDataIndicators(AnimalDetailsPage, ANIMALS, dataApi);

export { wrappedComponent as AnimalDetailsPage };