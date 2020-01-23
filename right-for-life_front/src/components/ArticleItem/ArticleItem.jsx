import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ArticleItem = ({article}) => {
  const {title, date, photo, text, id} = article;
  const { pathname: currentURL } = useLocation();

  return (
    <article className="m-4 flex flex-col sm:w-2/5 w-3/4">
        <div
          className="h-64 rounded-xl bg-cover shadow-md bg-center"
          style={{backgroundImage: "url(" + photo + ")"}}
        />
      <div className="z-40 w-19/20 bg-white text-lightgray-700 shadow-xl rounded-xl self-center -mt-10 px-5
                      lg:h-56 overflow-hidden flex flex-col justify-between h-auto">
        <p className="font-medium mt-2">{new Date(Number(date)).toLocaleDateString()}</p>
        <h2 className="uppercase mt-2 font-bold">{title}</h2>
        <p className="mt-2 font-size-sm">{text.slice(0, 120)}...</p>
        <div className="text-right">
          <Link
            to={`${currentURL}/${id}`}
            className="inline-block cursor-pointer min-w-5/12 bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-2 px-2
                       rounded-xl mt-2 mb-4 ml-2 outline-none"
            >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
};