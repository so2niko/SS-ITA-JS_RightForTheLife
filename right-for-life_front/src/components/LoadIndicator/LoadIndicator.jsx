import React from 'react';
import './LoadIndicator.css';

export const LoadIndicator = ({ message }) => (
  <article className="w-full h-full flex flex-col justify-center items-center text-lightgray-700">
    <div className="loader loader-3">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
    </div>
    { message && <p className="-mt-2 mb-2 text-xl font-bold">{message}</p> }
  </article>
);

LoadIndicator.defaultProps = {
  message: 'Загрузка...'
};  
