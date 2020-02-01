import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import { connect } from 'react-redux';

const BackBtn = ({position, urlForBackBtn}) => (
  <div className="relative width-full">
    <FloatingBtn
      icon="fa-arrow-left"
      position={position}
      onClick={urlForBackBtn ? null : () => window.history.back()}
      url={urlForBackBtn}/>
  </div>
);

const withConnect = connect(state => ({urlForBackBtn: state.urlForBackBtn}))(BackBtn);

export {withConnect as BackBtn};