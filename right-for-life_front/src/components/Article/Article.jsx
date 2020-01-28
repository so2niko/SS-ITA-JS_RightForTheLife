import React from "react";
import {Link, useLocation} from "react-router-dom";
import calcAge from '../../helpers/calcAge';

export const Article = ({article}) => {
  const {pathname: currentURL} = useLocation();
  const {title, date, photo, text} = article;

  return (
    <article className="flex flex-col h-full w-4/5 self-center -mt-10 justify-center mb-10">
      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center w-4/5 self-center"
        style={{backgroundImage: "url(" + photo + ")"}}
      >
        <Link to={`${currentURL.slice(0, currentURL.lastIndexOf('/'))}`}
              className="rounded-full h-12 w-12 flex items-center justify-center bg-white mt-6 ml-6 px-0 py-0">
          <i className="fa fa-arrow-left" style={{'fontSize': '20px', color: 'gray'}}></i>
        </Link>
      </div>

      <div
        className="z-40 h-auto w-auto xl:w-3/4 xl:h-20 bg-white text-lightgray-700
                   shadow-xl rounded-xl self-center -mt-10 px-8 flex items-center">
        <h2 className="uppercase my-2 font-extrabold text-xl">{title}</h2>
      </div>
      <div className="w-3/4  text-xl font-medium self-center h-auto px-10">
        <div className="text-right mt-6">
          <p className="font-medium text-lightgray-700">{calcAge(Number(date))} назад</p>
        </div>
        <p className="mt-6 text-base font-medium text-lightgray-600">{text}</p>
      </div>
    </article>
  );
};

