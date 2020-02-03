import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ArticleItem = ({article}) => {
  const { title, date, photo, text, _id } = article;
  const { pathname: currentURL } = useLocation();

  return (
    <article className="px-4 pb-16 flex flex-col w-full md:w-1/2">
        <div
          className="h-64 rounded-xl bg-cover shadow-md bg-center"
          style={{backgroundImage: "url(" + photo + ")"}}
        />
      <div className="z-40 w-19/20 bg-white text-lightgray-700 shadow-xl rounded-xl self-center -mt-10 px-5
                      pt-5 overflow-hidden relative xl:h-56">
        <p className="font-medium mb-2">{new Date(Number(date)).toLocaleDateString()}</p>
        <h2 className="uppercase mb-2 font-bold">{title.slice(0, 80)}{title.length >= 80 ? '...' : ''}</h2>
        <p className="mt-b font-size-sm">{text.slice(0, 120)}...</p>
          <Link
            to={`${currentURL}/${_id}`}
            className="min-w-5/12 bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-3 px-2
                       rounded-xl outline-none absolute"
            style={{bottom: '20px', right: '20px'}}
            >
            Подробнее
          </Link>
      </div>
    </article>
  );
};