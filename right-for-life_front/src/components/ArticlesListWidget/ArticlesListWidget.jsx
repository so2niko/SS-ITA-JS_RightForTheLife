import React from 'react';
import { Link } from 'react-router-dom';

export const ArticlesListWidget = ({ data }) => {
  return (
    <article className="h-full flex flex-col justify-between rounded-xl text-lightgray-700">
      { data.slice(0, 3).map(item => <ArticlesListWidgetItem key={item.id} data={item} />) }
      <div className="w-full flex justify-center">
        <Link 
          to="/news" 
          className="p-2 px-5 bg-white shadow-xl rounded-xl hover:bg-green-300 hover:text-green-700">
          Больше новостей
        </Link>
      </div>
    </article>
  );
};

const ArticlesListWidgetItem = ({ data: { id, title, photo } }) => (
  <Link to={`/news/${id}`}>
    <section className="h-32">
      <img 
        className="block h-32 w-full object-cover rounded-xl" 
        src={photo} 
        alt={title} 
      />
      <div 
        className="relative z-10 flex items-center -mt-8 mx-3 p-2 px-5 bg-white rounded-xl shadow-2xl-light" 
        style={{ minHeight: '3.5rem' }}>
        <h3>{title}</h3>
      </div>
    </section>
  </Link>
);
