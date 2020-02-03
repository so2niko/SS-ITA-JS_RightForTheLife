import React from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../rootConstants";
import { Article } from "../../components/Article";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const SingleEmergencyHelpPage = ({ data }) => {
  let { id } = useParams();
  const article = data.find(article => article.id === Number(id));

  if (!article)
    return (
      <ErrorIndicator
        message="Страница не найдена :("
        renderAction={() => (
          <Link to="/emergency">Вернуться на страницу срочной помощи</Link>
        )}
      />
    );

  return (
    <div className="-mt-10 max-w-4xl mx-auto mb-20">
      <Article article={article} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(
  SingleEmergencyHelpPage,
  API.EMERGENCY_HELP,
);

export { wrappedComponent as SingleEmergencyHelpPage };
