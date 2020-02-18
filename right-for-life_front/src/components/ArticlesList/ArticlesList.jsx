import React from 'react';
import { ArticleItem } from '../ArticleItem';

export const ArticlesList = ({ articles, listTitle }) => {
  const newArticles = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  const isAdmin = true;

  return (
    <div>
      <h1 className="mb-6 font-bold text-lightgray-700 text-4xl uppercase">
        {listTitle}
      </h1>
      <div className="flex flex-wrap justify-center -mx-4">
        {newArticles.map(article => {
          return <ArticleItem key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};
