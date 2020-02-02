import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import PropTypes from 'prop-types';
import { requestData } from './actions';
import { ErrorIndicator } from '../../components/ErrorIndicator';
import { LoadIndicator } from '../../components/LoadIndicator';

export const withFetchDataIndicators = (WrappedComponent, API, isUpdate) => (props) => {
  const { name, api } = API;
  const dispatch = useDispatch();
  let { error, data } = useSelector(({ fetchDataReducer }) => ({ ...fetchDataReducer }));

  data = data[name];

  useEffect(() => {
    if (isUpdate || !data) dispatch(requestData({ api, name }));
  }, []);

  const action = (
    <button 
      className="mt-1 font-bold text-orange-400 hover:text-orange-500 uppercase"
      onClick={() => dispatch(requestData({ api, name }))}>
      Обновить
    </button>
  );

  if (error) return <ErrorIndicator message="Упс... Ошибка!" renderAction={() => action} />
  if (!data) return <LoadIndicator message="Загружаем данные..." />
  if (data) return <WrappedComponent {...props} data={data} />
};

withFetchDataIndicators.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
  API: PropTypes.shape({
    name: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired,
  }).isRequired,
  isUpdate: PropTypes.bool,
}
