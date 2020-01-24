import React from "react";
import {ArticlesList} from "../../components/ArticlesList";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";

const NewsPage = ({ data }) => {
  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <ArticlesList articles={data} listTitle="Новости"/>
    </div>
  );
};

const dataApi = 'https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json';
const wrappedComponent = withFetchDataIndicators(NewsPage, dataApi);

export { wrappedComponent as NewsPage };
