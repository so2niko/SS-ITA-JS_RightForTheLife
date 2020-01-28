import React from 'react';
import { ArticlesList } from '../../components/ArticlesList';
import { BE_URL } from '../../helpers/configs.js';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { withPagination } from '../../hoc/withPagination';
import { NEWS } from '../../rootConstants';

const NewsListPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Новости"/>
  );
};

const dataApi = `${BE_URL}/news`;
const wrappedComponent = withFetchDataIndicators(withPagination(NewsListPage, 10), NEWS, dataApi);

export { wrappedComponent as NewsListPage};
