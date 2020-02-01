import React from "react";
import { Link } from "react-router-dom";
import CSSTransition from "react-addons-css-transition-group";
import { API } from "../../rootConstants";
import { AnimalDetails } from "./AnimalDetails.jsx";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import "./style.css";

const AnimalDetailsPage = props => {
  const petId = props.match.params.id;
  const petObj = props.data.find(animal => String(animal.id) === petId);

  return petObj ? (
    <CSSTransition
      transitionName="animal-details-card"
      transitionAppear={true}
      transitionAppearTimeout={200}
      transitionEnter={false}
      transitionLeave={false}
    >
      <AnimalDetails {...petObj} />
    </CSSTransition>
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
