import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '../../helpers/useQuery';
import { FiltersItem } from './FiltersItem';

export const Filters = ({ filters }) => {
  const [params, setParams] = useState([]);
  const form = useRef(null);
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();

  return (
    <form 
      className="flex flex-wrap md:flex-no-wrap justify-center items-center mx-4 mb-6 p-1 rounded-xl shadow-lg bg-white" 
      ref={form} 
      onSubmit={e => {
        e.preventDefault();
        updateQuery(params, location, history, query);
      }}>
      <ul className="flex flex-wrap sm:flex-no-wrap w-full pr-2 border-r border-gray-300">
        {filters.map((filter, idx) => (
          <li 
            key={idx} 
            className="w-1/2 p-2">
            <FiltersItem
              filter={filter}
              updateParams={filter => setParams([...params, filter])}
            />
          </li>
        ))}
      </ul>
      <button 
        type="submit"
        className={`m-2 ml-4 text-lg font-bold text-${params.length ? 'blue-700' : 'gray-600'}`}
        disabled={params.length === 0}>
        Применить
      </button>
      <button
        className={`m-2 mr-4 text-lg font-bold text-${params.length ? 'red-700' : 'gray-600'}`}
        onClick={() => {
          setParams([]);
          form.current.reset();
          history.push(location.pathname);
        }}
        disabled={params.length === 0}>
        Очистить
      </button>
    </form>
  );
};

const updateQuery = (params, location, history, query) => {
  query.delete('page');

  if (params.length > 0) {
    params.forEach(([key, value]) => query.set(key, value));
    history.push(location.pathname + '?' + query.toString());
  }
};
