import React from 'react';
import { API } from '../../rootConstants';
import { ArticlesList } from '../../components/ArticlesList';
import { withPagination } from '../../hoc/withPagination';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const NewsListPage = ({ data }) => {
  return <ArticlesList articles={data} listTitle="Новости" />;
};

const wrappedComponent = withFetchDataIndicators(
  withPagination(NewsListPage, 10),
  API.NEWS,
  true,
);

export { wrappedComponent as NewsListPage };
