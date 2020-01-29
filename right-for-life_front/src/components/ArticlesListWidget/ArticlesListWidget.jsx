import React from 'react';
import { Link } from 'react-router-dom';

export const ArticlesListWidget = ({ data, url }) => {
  return (
    <article className="h-full flex flex-col justify-between rounded-xl text-lightgray-700">
      { data.reverse().slice(0, 3).map(item => <ArticlesListWidgetItem key={item.id} data={item} url={url} />) }
      <div className="w-full flex justify-center">
        <Link 
          to={`/${url}`} 
          className="relative z-10 mt-1 p-2 px-5 bg-white shadow-xl rounded-xl hover:bg-green-300 hover:text-green-700">
          Больше новостей
        </Link>
      </div>
    </article>
  );
};

const ArticlesListWidgetItem = ({ data: { id, title, photo }, url }) => (
  <Link to={`/${url}/${id}`}>
    <section 
      className="rounded-xl shadow-2xl"
      style={{ height: '7.5rem' }}>
      <img 
        className="block w-full object-cover rounded-xl"
        style={{ height: '7.5rem' }} 
        src={photo} 
        alt={title} 
      />
      <div 
        className="relative z-10 h-full flex items-center -mt-5 mx-3 p-2 px-5 bg-white rounded-xl shadow-2xl-light" 
        style={{ maxHeight: '3.75rem' }}>
        <h3>{title}</h3>
      </div>
    </section>
  </Link>
);
