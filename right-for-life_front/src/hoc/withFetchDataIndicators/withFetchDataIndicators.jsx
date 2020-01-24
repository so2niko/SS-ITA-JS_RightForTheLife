import React, { useState, useEffect } from 'react';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { LoadIndicator } from '../../components/LoadIndicator';

export const withFetchDataIndicators = (WrappedComponent, dataApi) => (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(dataApi, setData, setError);
  }, []);

  const action = () => (
    <button 
      className="mt-1 font-bold text-orange-400 hover:text-orange-500 uppercase"
      onClick={() => fetchData(dataApi, setData, setError)}>
      Обновить
    </button>
  );

  if (error) return <ErrorIndicator message="Упс... Ошибка!" renderAction={action} />
  if (!data) return <LoadIndicator message="Загружаем данные..." />
  if (data) return <WrappedComponent {...props} data={data} />
};

const fetchData = (dataApi, setData, setError) => {
  setData(null);
  setError(null);

  setTimeout(() => {
    fetch(dataApi)
      .then(result => result.json())
      .then(json => setData(json))
      .catch(error => setError(error));
  }, 1000);
};
