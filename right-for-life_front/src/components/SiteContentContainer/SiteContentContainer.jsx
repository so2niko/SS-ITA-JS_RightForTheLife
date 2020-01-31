import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class SiteContentContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("Route change!", this.props.location.pathname);
    }
  }

  render() {
    const {children} = this.props;

    return (
      <main className="container mx-auto flex-grow flex-shrink-0 mt-24 px-3">
        {children}
      </main>
    )
  }

};

const withConnect = withRouter(props => <SiteContentContainer {...props} />);

export { withConnect as SiteContentContainer };


/*import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from './constants';

export const fetchDataReducer = (state = { data: {}, error: null }, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_DATA_REQUEST:
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
*/
