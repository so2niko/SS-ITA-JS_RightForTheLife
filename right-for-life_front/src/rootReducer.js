import { combineReducers } from 'redux';
import { fetchDataReducer } from './hoc/withFetchDataIndicators';

export const rootReducer = combineReducers({
  fetchDataReducer,
});
