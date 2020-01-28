import React from "react";
import {Link, useLocation} from "react-router-dom";
import calcAge from '../../helpers/calcAge';

export const Article = ({article}) => {
  const {pathname: currentURL} = useLocation();
  const {title, date, photo, text} = article;

  return (
    <article>
      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center relative"
        style={{backgroundImage: "url(" + photo + ")"}}
      >
        <Link
          to={`${currentURL.slice(0, currentURL.lastIndexOf('/'))}`}
          className="block rounded-full h-12 w-12 flex items-center justify-center bg-white absolute"
          style={{top: "20px", left: "20px"}}
        >
          <i className="fa fa-arrow-left" style={{'fontSize': '20px', color: 'gray'}} />
        </Link>
      </div>
      <h2 className="uppercase font-extrabold text-xl z-20 relative bg-white text-lightgray-700
                 shadow-xl rounded-xl -mt-10 px-8 flex items-center mx-8 mb-10"
          style={{minHeight: "100px"}}
      >
        {title}
      </h2>
      <div className="mx-10 md:mx-20">
        <aside
          className="font-medium text-lightgray-700 text-right text-xl mb-10"
        >
          {calcAge(Number(date))} назад
        </aside>
        <p className="font-medium text-lightgray-600">
          {text}
        </p>
      </div>
    </article>
  );
};
