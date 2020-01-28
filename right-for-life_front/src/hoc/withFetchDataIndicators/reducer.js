import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from './constants';

export const fetchDataReducer = (state = { data: {}, error: null }, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_DATA_REQUEST:
      console.log(state);
      return { ...state, error: null };

    case FETCH_DATA_FAILURE:
      return { ...state, error: payload };

    case FETCH_DATA_SUCCESS:
      const { success, name } = payload;
      const { data } = state;
      
      data[name] = success;

      return { ...state, data };

    default:
      return state;
  }
};
