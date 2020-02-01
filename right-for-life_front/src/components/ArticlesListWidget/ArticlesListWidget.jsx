import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../rootConstants';
import { withFetchDataIndicators } from '../../hoc/withFetchDataIndicators';

export const ArticlesListWidget = () => {
  return (
    <article className="h-full flex flex-col justify-between rounded-xl text-lightgray-700">
      <ArticlesListWidgetEmergency color="red" url="emergency" />
      <ArticlesListWidgetItem
        color="green"
        url="help"
        data={{ photo: 'https://pbs.twimg.com/media/Dp9hsCEWsAAhWXP.jpg', title: "ПОМОЩЬ ФОНДУ" }}
      />
      <ArticlesListWidgetNews url="news" />
      <div className="w-full flex justify-center"></div>
    </article>
  );
};

const ArticlesListWidgetItem = ({ data, color, url }) => {
  const { id, title, photo } = data[0] || data; 

  return (
    <Link to={`${id ? `/${url}/${id}` : `/${url}`}`}>
      <section 
        className="rounded-xl shadow-2xl"
        style={{ height: '7.5rem' }}>
        <img 
          className={`block w-full object-cover rounded-xl border-4 border-white ${color ? `border-4 border-${color}-300` : ''}`}
          style={{ height: '7.5rem' }} 
          src={photo} 
          alt={title} 
        />
        <div 
          className={`relative z-10 h-full flex items-center -mt-5 mx-3 p-2 px-5 bg-white rounded-xl shadow-2xl-light ${color ? `bg-${color}-300 text-${color}-700` : ''}`} 
          style={{ maxHeight: '3.75rem' }}>
          <h3>{title}</h3>
        </div>
      </section>
    </Link>
  );
};

const ArticlesListWidgetEmergency = withFetchDataIndicators(
  ArticlesListWidgetItem, 
  API.EMERGENCY_HELP
);

const ArticlesListWidgetNews = withFetchDataIndicators(
  ArticlesListWidgetItem, 
  API.NEWS
);
