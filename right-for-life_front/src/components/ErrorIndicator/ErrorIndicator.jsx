import React from 'react';
import dog from '../../assets/dog.png';

export const ErrorIndicator = ({ message, action }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-lightgray-700">
      <img className="mx-3" src={dog} alt="error" width="80" />
      <p className="mt-4 text-2xl font-bold">{message}</p>
      { action && <p className="mt-3 text-gray-600 hover:text-gray-700">{ action() }</p> }
    </div>
  );
};

ErrorIndicator.defaultProps = {
  message: 'Ошибка...'
};
