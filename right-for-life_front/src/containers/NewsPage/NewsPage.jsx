import React, {useState, useEffect} from "react";
import {ArticlesList} from "../../components/ArticlesList";

export const NewsPage = () => {
  const dataApi = "https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json";
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(dataApi)
      .then(data => data.json())
      .then(list => setNews(list));
  }, []);

  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <ArticlesList articles={news} listTitle="Новости"/>
    </div>
  );
};
