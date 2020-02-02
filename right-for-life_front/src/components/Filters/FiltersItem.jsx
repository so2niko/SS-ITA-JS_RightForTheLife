import React from 'react';
import './filters.css';

export const FiltersItem = ({ filter, updateParams }) => {
  const [key, value] = filter;

  return (
    <>
      <input 
        className="hidden" 
        type="radio" 
        name={key} 
        id={value}
        onClick={() => updateParams(filter)} 
      />
      <label 
        className="block w-full p-2 rounded-lg text-center text-lg text-gray-600 bg-gray-100 cursor-pointer" 
        htmlFor={value}>
        <i className={`fas fa-${value}`} />
      </label>
    </>
  );
};
