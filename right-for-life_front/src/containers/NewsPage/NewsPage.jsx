import React from "react";
import { NEWS } from '../../rootConstants';
import {ArticlesList} from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const NewsPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Новости"/>
  );
};

const dataApi = 'https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json';
const wrappedComponent = withFetchDataIndicators(withPagination(NewsPage, 10), NEWS, dataApi);

export { wrappedComponent as NewsPage };
