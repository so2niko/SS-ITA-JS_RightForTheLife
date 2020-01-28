import React from 'react';
import { ArticlesList } from '../../components/ArticlesList';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { withPagination } from '../../hoc/withPagination';
import { HAPPY_STORIES } from '../../rootConstants';

const HappyStoriesPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Cчастливые истории"/>
  );
};

const dataApi = `${BE_URL}/happyStories`;
const wrappedComponent = withFetchDataIndicators(withPagination(HappyStoriesPage, 10), HAPPY_STORIES, dataApi);

export { wrappedComponent as HappyStoriesPage };
