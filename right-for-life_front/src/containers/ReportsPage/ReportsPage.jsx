import React from "react";
import {API} from "../../rootConstants";
import {withPagination} from "../../hoc/withPagination";
import {withFetchDataIndicators} from "../../hoc/withFetchDataIndicators";
import {ArticlesList} from "../../components/ArticlesList";

const ReportsPage = ({data}) => {
  data.forEach(item => item.photo = item.gallery[0]);
  return (
    <div>
      <ArticlesList articles={data} listTitle="Финансовые отчеты"/>
      <iframe src="https://drive.google.com/embeddedfolderview?id=1HMPNd9HcedJLD4j40TS3bxmNOAHx5-4a#grid" style={{width: '100%', height: '600px', border: '1px solid red'}} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(
  withPagination(ReportsPage, 10),
  API.REPORTS,
);

export {wrappedComponent as ReportsPage};
