import React from 'react';
import { ArticleItem } from '../ArticleItem';
import { Select } from '../Select';

export const ArticlesList = ({ articles, listTitle }) => {
  const isEdit = true;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center">
        <h1 className="font-bold text-lightgray-700 text-4xl uppercase">
          {listTitle}
        </h1>
        {isEdit ? <Select optAdd classNames="ml-4" /> : null}
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
        {articles?.map(article => {
          return <ArticleItem key={article._id} article={article} />;
        })}
      </div>
    </div>
  );
};
