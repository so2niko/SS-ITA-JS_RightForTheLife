import { combineReducers } from 'redux';
import { fetchDataReducer } from './hoc/withFetchDataIndicators';
import { urlForBackBtnReducer as urlForBackBtn } from './components/SiteContentContainer/';
import { isLogin } from "./containers/LoginPage";

export const rootReducer = combineReducers({
  fetchDataReducer, 
  urlForBackBtn,
  isLogin
});
