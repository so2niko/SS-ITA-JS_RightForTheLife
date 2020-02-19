import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';
import { DonateButton } from '../DonateButton';

export const ArticlesListWidget = () => (
  <article className="h-full w-full flex flex-wrap flex-row lg:flex-col justify-between rounded-xl font-bold text-lightgray-700">
    <ArticlesListWidgetEmergency color="red" url="emergencies" />
    <ArticlesListWidgetItem
      color="green"
      url="help"
      data={{
        photo: 'https://pbs.twimg.com/media/Dp9hsCEWsAAhWXP.jpg',
        title: 'ПОМОЩЬ ФОНДУ',
      }}
    />
    <ArticlesListWidgetNews url="news" />
    <div className="min-w-full flex justify-center">
      <DonateButton className="px-8 py-3 rounded-xl text-lg shadow-2xl-light border-2 border-orange-300 text-red-600 bg-orange-200 hover:bg-orange-300" />
    </div>
  </article>
);

const ArticlesListWidgetItem = ({ data, color, url }) => {
  const { _id, title, photo } = data[0] || data;

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
          <h3>{title}</h3>
        </div>
      </section>
    </Link>
  );
};

const ArticlesListWidgetEmergency = withFetchDataIndicators(
  ArticlesListWidgetItem,
  API.EMERGENCY_HELP,
);

const ArticlesListWidgetNews = withFetchDataIndicators(
  ArticlesListWidgetItem,
  API.NEWS,
);
