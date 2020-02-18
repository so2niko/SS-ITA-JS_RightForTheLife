import React from 'react';
import { API } from '../../rootConstants';
import { ArticlesList } from '../../components/ArticlesList';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const HappyStoriesPage = props => {
  return (
    <ArticlesList articles={props.data.docs} listTitle="Cчастливые истории" />
  );
};

const wrappedComponent = withFetchDataIndicators(
  HappyStoriesPage,
  API.HAPPY_STORIES,
  true,
);

export { wrappedComponent as HappyStoriesPage };
