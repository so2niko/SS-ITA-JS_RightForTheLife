import React from "react";
import {Link, useLocation} from "react-router-dom";
import calcAge from '../../helpers/calcAge';

export const Article = ({article}) => {
  const {pathname: currentURL} = useLocation();
  const {title, date, photo, text} = article;

  return (
    <article>
      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center"
        style={{backgroundImage: "url(" + photo + ")"}}
      >
        <Link to={`${currentURL.slice(0, currentURL.lastIndexOf('/'))}`}
              className="rounded-full h-12 w-12 flex items-center justify-center bg-white mt-6 ml-6">
          <i className="fa fa-arrow-left" style={{'fontSize': '20px', color: 'gray'}} />
        </Link>
      </div>
      <h2 className="uppercase my-2 font-extrabold text-xl z-20 relative bg-white text-lightgray-700
                 shadow-xl rounded-xl -mt-10 px-8">
        {title}
      </h2>
      <aside className="font-medium text-lightgray-700">{calcAge(Number(date))} назад</aside>
      <p className="font-medium px-10 text-lightgray-600">
        {text}
      </p>
    </article>
  );
};
