import React from "react";
import { ArticlesList } from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const HappyStoriesPage = ({ data }) => {
  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <ArticlesList articles={data} listTitle="Cчастливые истории"/>
    </div>
  );
};

const dataApi = 'https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json';
const wrappedComponent = withFetchDataIndicators(HappyStoriesPage, dataApi);

export { wrappedComponent as HappyStoriesPage };
