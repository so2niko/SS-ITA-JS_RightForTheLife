import { combineReducers } from 'redux';
import { fetchDataReducer } from './hoc/withFetchDataIndicators';
import { useOrNotGoBackReducer as useOrNotGoBack } from './components/SiteContentContainer/useOrNotGoBackReducer';

export const rootReducer = combineReducers({
  fetchDataReducer, useOrNotGoBack,
});
