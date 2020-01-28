import React from "react";
import { Link, useParams } from "react-router-dom";

import { EMERGENCY_HELP } from '../../rootConstants';

import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import { Article } from "../../components/Article";
import { ErrorIndicator } from "../../components/ErrorIndicator";

const SingleEmergencyHelpPage = ({ data }) => {
  let { id } = useParams();
  const article = data.find(article => article.id === Number(id));

  if (!article)
    return <ErrorIndicator
      message="Страница не найдена :("
      renderAction={() => <Link to="/emergency">Вернуться на страницу срочной помощи</Link>}
    />;

  return (
    <div className="flex flex-wrap justify-center">
      <Article article={article} />
    </div>
  );
};

const dataApi = "https://alex-boklag.github.io/SSA-Demo-AnimalShelter/db/emergency.json";
const wrappedComponent = withFetchDataIndicators(SingleEmergencyHelpPage, EMERGENCY_HELP, dataApi);

export { wrappedComponent as SingleEmergencyHelpPage };
