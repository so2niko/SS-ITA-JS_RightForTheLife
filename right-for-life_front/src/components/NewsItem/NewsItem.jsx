import React from 'react';

export const NewsItem = (props) => {
  const {title, date, photo, text} = props.news;

  return (
    <li className="md:w-2/5 sm:w-auto m-4 flex flex-col">
      <div className="pointer">
        <div className="h-64 rounded-xl bg-cover shadow-md bg-center"
             style={{backgroundImage: "url(" + photo + ")"}}></div>
      </div>
      <div className="z-40 w-19/20 bg-white text-lightgray-700 shadow-xl rounded-xl self-center -mt-10 px-5
                      md:h-56 overflow-hidden flex flex-col justify-between sm:h-auto">
        <p className="font-medium mt-2">{new Date(Number(date)).toLocaleDateString()}</p>
        <p className="uppercase mt-2 font-bold">{title}</p>
        <p className="mt-2 font-size-sm">{text.split(/[.!]/)[0]}...</p>
        <div className="text-right">
          <button className="min-w-5/12 bg-orange-300 hover:bg-orange-400 text-orange-700 font-bold py-2 px-2
                             rounded-xl mt-2 mb-4 ml-2" style={{outline: 'none'}}>
            Подробнее
          </button>
        </div>
      </div>
    </li>
  );
};