import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../rootConstants';
import { Article } from '../../components/Article';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const HappyStoryPage = ({ data }) => {
  const { id } = useParams();
  let article = data.docs.find(item => item._id === id);

  if (id === 'new') {
    article = {
      _id: 'new',
      gallery: [],
      videos: [],
      date: Date.now(),
      title: 'Введите заголовок...',
      photo: '',
      text: 'Введите текст...',
    };
  }

  if (!article)
    return (
      <ErrorIndicator
        message="Страница не найдена :("
        renderAction={() => (
          <Link to="/stories">Посмотреть другие истории</Link>
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
  HappyStoryPage,
  API.HAPPY_STORIES,
);

export { wrappedComponent as HappyStoryPage };
