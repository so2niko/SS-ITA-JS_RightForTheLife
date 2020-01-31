import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setBackBtnValueAction } from "./setBackBtnValueAction.js";

class SiteContentContainer extends React.Component {
  // to will be '/[value]', from will be '/[value]/[any symbols]'
  // if to unset, to = from
  allowedPages = [
    {from: 'animals'},
    {from: 'stories'},
    {from: 'news'},
    {from: 'news', to: 'reports'},
    {from: 'reports'},
  ];

  componentDidMount() {
    if (!window.name) {
      window.name = String(Date.now())
    } else if (window.history.length < 50 &&
      window.history.length === Number(sessionStorage.getItem('backBtn' + window.name))) {
      this.props.setBackBtnValue(true);
    }

    window.addEventListener('beforeunload', () => {
      if (this.props.useOrNotGoBack) {
        sessionStorage.setItem('backBtn' + window.name, String(window.history.length))
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const useBackBtn = -1 !== this.allowedPages.findIndex(item => {
        return prevProps.location.pathname === '/' + item.from &&
          this.props.location.pathname.match(new RegExp(`/${item.to ? item.to : item.from}/.+`))
      });
      this.props.setBackBtnValue(useBackBtn);
      //console.log(prevProps.location.pathname + " --> " + this.props.location.pathname);
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

}

const withConnect = connect(state => ({
  useOrNotGoBack: state.useOrNotGoBack
}), {
  setBackBtnValue: setBackBtnValueAction
})(withRouter(props => <SiteContentContainer {...props} />));

export { withConnect as SiteContentContainer };
