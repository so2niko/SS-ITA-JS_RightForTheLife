import React from "react";
import { HAPPY_STORIES } from '../../rootConstants';
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import {withPagination} from "../../hoc/withPagination";

const HappyStoriesPage = ({ data }) => {
  return (
      <ArticlesList articles={data} listTitle="Cчастливые истории"/>
  );
};

const dataApi = 'https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json';
const wrappedComponent = withFetchDataIndicators(withPagination(HappyStoriesPage, 10), HAPPY_STORIES, dataApi);

export { wrappedComponent as HappyStoriesPage };
