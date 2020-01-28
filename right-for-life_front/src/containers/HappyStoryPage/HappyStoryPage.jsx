import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../../components/Article';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { HAPPY_STORIES } from '../../rootConstants';

const HappyStoryPage = ({data}) => {
  const {id} = useParams();
  const article = data.find(article => article._id === id);
  if (!article)
    return <ErrorIndicator
      message="Страница не найдена :("
      renderAction={() => <Link to="/">Вернуться на главную</Link>}
    />;
  return (
    <div className="-mt-10 max-w-4xl mx-auto mb-20">
      <Article article={article} />
    </div>
  );
};

const dataApi = `${BE_URL}/happyStories`;
const wrappedComponent = withFetchDataIndicators(HappyStoryPage, HAPPY_STORIES, dataApi);

export {wrappedComponent as HappyStoryPage};