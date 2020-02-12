import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUrlForBackBtn } from "./setUrlForBackBtn.js";

class SiteContentContainer extends React.Component {
  backOrForwardUsed = false;

  componentDidMount() {
    // if first start app in this tab
    if (!window.name) {
      window.name = String(Date.now())
    }

    // if page reloaded
    if (window.history.length < 50 &&
      window.history.length === Number(sessionStorage.getItem('backBtn' + window.name))) {

      this.props.setUrlForBackBtn(null);
    } else {
      const categoryUrl = this.props.location.pathname.match(/\/[a-z]+/);
      this.props.setUrlForBackBtn(categoryUrl ? categoryUrl[0] : '/');
    }

    window.addEventListener('beforeunload', () => {
      if (this.props.urlForBackBtn === null) {
        sessionStorage.setItem('backBtn' + window.name, String(window.history.length))
      }
    });

    window.addEventListener('popstate', (event) => {
      this.backOrForwardUsed = true;
    });
  }

  componentDidUpdate(prevProps) {
    // setTimeout used to start after popstate event
    setTimeout(() => {
      // first 'if' used to prevent unnecessary use of store
      if (this.props.location.pathname !== prevProps.location.pathname) {
        if (this.backOrForwardUsed) {
          this.props.setUrlForBackBtn(prevProps.location.pathname + prevProps.location.search);
        } else {
          this.props.setUrlForBackBtn(null);
        }
      }

      this.backOrForwardUsed = false;
    })
  }

  render() {
    const {children} = this.props;

    return (
      <main
      className="container mx-auto flex-grow flex-shrink-0 overflow-x-hidden  pt-6 lg:pt-24 px-3">
        {children}
      </main>
    )
  }

}

const withConnect = connect(state => ({
  urlForBackBtn: state.urlForBackBtn
}), {
  setUrlForBackBtn: setUrlForBackBtn
})(withRouter(props => <SiteContentContainer {...props} />));

export { withConnect as SiteContentContainer };
