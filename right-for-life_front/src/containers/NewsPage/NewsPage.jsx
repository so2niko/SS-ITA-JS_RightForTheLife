import React from "react";
import {ArticlesList} from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const NewsPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Новости"/>
  );
};

const dataApi = 'https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json';
const wrappedComponent = withFetchDataIndicators(withPagination(NewsPage), dataApi);

export { wrappedComponent as NewsPage };
