import React, {useState, useEffect} from "react";
import {NewsList} from "../../components/NewsList";
import {Pagination} from "../../components/Pagination";

export const NewsPage = () => {
  const dataApi = "https://raw.githubusercontent.com/protonaby/demo3-animal-shelter/master/db/news.json";
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(dataApi)
      .then(data => data.json())
      .then(list => setNews(list));
  }, []);

  function test(data) {
    console.log(data)
  }

  return (
    <div className="bg-lightgray-100 min-h-screen pt-16 pb-2">
      <NewsList news={news}/>
      <Pagination currentPageNum={12} totalPagesQuantity={50} pageChangeHandler={test}/>
    </div>
  );
};
