import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import { connect } from 'react-redux';
import PropTypes from "prop-types"

const BackBtn = ({position, urlForBackBtn}) => (
  <div className="relative width-full">
    <FloatingBtn
      icon="arrow-left"
      position={position}
      onClick={urlForBackBtn ? null : () => window.history.back()}
      url={urlForBackBtn}/>
  </div>
);

BackBtn.propTypes = {
  position: PropTypes.string,
  urlForBackBtn: PropTypes.string,
};

const withConnect = connect(state => ({urlForBackBtn: state.urlForBackBtn}))(BackBtn);

export {withConnect as BackBtn};