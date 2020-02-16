import React from 'react';

export const HomeArticle = ({ data: { textHome } }) => {
  const title = 'Фонд "Мы за право на жизнь"';

  return (
    <article className="p-5">
      <h1 className="mb-3 text-3xl font-bold text-lightgray-700">{title}</h1>
      {textHome.map((item, index) => (
        <p key={index} className="mt-2 text-justify text-lightgray-800">
          {item}
        </p>
      ))}
    </article>
  );
};
