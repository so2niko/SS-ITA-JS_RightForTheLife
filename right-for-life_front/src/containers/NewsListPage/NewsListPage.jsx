import React from 'react';
import { API } from '../../rootConstants';
import { ArticlesList } from '../../components/ArticlesList';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

const NewsListPage = props => {
  return <ArticlesList articles={props.data.docs} listTitle="Новости" />;
};

const wrappedComponent = withFetchDataIndicators(NewsListPage, API.NEWS, true);

export { wrappedComponent as NewsListPage };
