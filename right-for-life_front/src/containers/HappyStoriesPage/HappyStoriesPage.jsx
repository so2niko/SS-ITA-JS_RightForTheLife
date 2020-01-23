import React, {useState, useEffect} from "react";
import { ArticlesList } from "../../components/ArticlesList";

export const HappyStoriesPage = () => {
  const dataApi = "https://raw.githubusercontent.com/AlexeyKasaev3/softServe-academy/master/demo-3-data/news.json";
  const [happyStories, setHappyStories] = useState([]);

  useEffect(() => {
    fetch(dataApi)
      .then(data => data.json())
      .then(happyStories => setHappyStories(happyStories));
  }, []);

  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <ArticlesList articles={happyStories} listTitle="Cчастливые истории"/>
    </div>
  );
};
