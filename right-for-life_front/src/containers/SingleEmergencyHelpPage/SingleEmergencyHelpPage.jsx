import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../../components/Article';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { API } from '../../rootConstants';

const SingleEmergencyHelpPage = ({ data }) => {
  let { id } = useParams();
  const article = data.find(article => article._id === id);

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
    <div className="-mt-10 max-w-4xl mx-auto">
      <Article article={article} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(
  SingleEmergencyHelpPage,
  API.EMERGENCY_HELP,
);

export { wrappedComponent as SingleEmergencyHelpPage };
