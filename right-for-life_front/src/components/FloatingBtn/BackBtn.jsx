import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import { connect } from 'react-redux';

const BackBtn = ({position, useOrNotGoBack}) => (
  <div className="relative width-full">
    <FloatingBtn
      icon="fa-arrow-left"
      position={position}
      onClick={useOrNotGoBack ? () => window.history.forward() || window.history.back() : null}
      url={window.location.pathname.match(/\/[a-z]+/)[0]}/>
  </div>
);

const withConnect = connect(state => ({useOrNotGoBack: state.useOrNotGoBack}))(BackBtn);

export {withConnect as BackBtn};