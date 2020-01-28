import React from "react";
import calcAge from '../../helpers/calcAge';
import {BackAndShareButtons} from "../BackAndShareButtons";

export const Article = ({article}) => {
  const {title, date, photo, text} = article;

  return (
    <article>
      <div
        className="h-78 rounded-b-xl bg-cover shadow-md bg-center"
        style={{backgroundImage: "url(" + photo + ")"}}
      >
        <BackAndShareButtons />
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
