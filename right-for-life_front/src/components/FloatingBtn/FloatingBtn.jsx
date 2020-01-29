import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import PropTypes from "prop-types"
import CSSTransition from 'react-addons-css-transition-group';

export const FloatingBtn = ({icon, position, onClick, url, content,}) => {
  const className = `floating-button float-right absolute z-20 bg-white hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-lg text-gray-700 text-lg h-12 w-12 ${position}`;
  const iconElem = content ? content : <i className={`fas ${icon}`}/>;


  return (
    <CSSTransition
      transitionName="floating-button"
      transitionAppear={false}
      transitionAppearTimeout={null}
      transitionEnter={false}
      transitionLeave={false}>
      {onClick ? <div onClick={onClick} className={className}>{iconElem}</div>
        : <Link className={className} to={url}>{iconElem}</Link>}
    </CSSTransition>
  )
};

FloatingBtn.propTypes = {
  icon: PropTypes.string,
  position: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
  content: PropTypes.node,
};

FloatingBtn.defaultProps = {
  icon: '',
  position: 'left-0 ml-2 mt-2',
  onClick: null,
};