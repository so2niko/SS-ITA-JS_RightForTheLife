import React from "react";
import {NewsItem} from "../NewsItem";

export const NewsList = ({news}) => {
  return (
    <div>
      <p className="ml-40 my-6 font-bold text-lightgray-700 text-4xl">НОВОСТИ</p>
      <ul className="flex flex-wrap justify-center">
        {news.map(newsItem => {
          return <NewsItem key={newsItem.id} news={newsItem}/>;
        })}
      </ul>
    </div>
  );
};
