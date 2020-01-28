import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import PropTypes from "prop-types"

export const FloatingBtn = ({icon, position, onClick, url, content}) => {
  const className = `floating-button float-right absolute z-20 bg-white hover:bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg text-gray-700 text-lg ${position}`;
  const iconElem = content ? content : <i className={`fas ${icon}`}/>;

  return onClick ? <div onClick={onClick} className={className}>{iconElem}</div>
    : <Link className={className} to={url}>{iconElem}</Link>
};

FloatingBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
};

FloatingBtn.defaultProps = {
  position: 'left-0',
};