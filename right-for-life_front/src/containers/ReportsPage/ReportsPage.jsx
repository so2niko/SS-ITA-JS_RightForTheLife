import React from 'react';
import { API } from '../../rootConstants';
// import { withPagination } from '../../hoc/withPagination';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { ArticlesList } from '../../components/ArticlesList';

const ReportsPage = ({ data }) => {
  data.forEach(item => (item.photo = item.gallery[0]));
  return (
    <div>
      <ArticlesList articles={data} listTitle="Финансовые отчеты" />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(ReportsPage, API.REPORTS);

export { wrappedComponent as ReportsPage };
