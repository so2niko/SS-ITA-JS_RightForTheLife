import React from 'react';
import { Link } from 'react-router-dom';
import { DonateButton } from '../DonateButton';

export const ArticlesListWidget = ({ emergency, article }) => (
  <article className="h-full w-full flex flex-wrap flex-row lg:flex-col rounded-xl font-bold text-lightgray-700">
    {emergency && (
      <ArticlesListWidgetItem data={emergency} color="red" url="emergencies" />
    )}
    <ArticlesListWidgetItem
      color="green"
      url="help"
      data={{
        photo: 'https://pbs.twimg.com/media/Dp9hsCEWsAAhWXP.jpg',
        title: 'ПОМОЩЬ ФОНДУ',
      }}
    />
    <ArticlesListWidgetItem data={article} url="news" />
    <div className="min-w-full flex justify-center">
      <DonateButton className="w-full mx-20 py-2 rounded-lg text-lg text-xl text-center text-yellow-700 bg-yellow-300 hover:bg-yellow-400" />
    </div>
  </article>
);

const ArticlesListWidgetItem = ({ data, color, url }) => {
  const { _id, title, photo } = data;

  return (
    <Link
      to={`${_id ? `/${url}/${_id}` : `/${url}`}`}
      className="block w-full mb-16"
    >
      <section className="h-48 lg:h-30 rounded-xl shadow-2xl">
        <img
          className={`block w-full h-48 lg:h-30 object-cover rounded-xl border-4 border-white ${
            color ? `border-4 border-${color}-300` : ''
          }`}
          src={photo}
          alt={title}
        />
        <div
          className={`relative z-10 h-full max-h-15 flex items-center -mt-5 mx-3 p-2 px-5 bg-white rounded-xl shadow-2xl-light ${
            color ? `bg-${color}-300 text-${color}-700` : ''
          }`}
        >
          <h3 className="uppercase">
            {title.length > 62 ? `${title.slice(0, 62)}...` : title}
          </h3>
        </div>
      </section>
    </Link>
  );
};
