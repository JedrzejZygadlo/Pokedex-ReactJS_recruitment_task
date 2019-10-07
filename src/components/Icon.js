import React from 'react';
import ReactSVG from 'react-svg';
import '../assets/Icon.css';
const Icon = ({ iconType }) => {
  return (
    <ReactSVG
      className="icon"
      src={process.env.PUBLIC_URL + `/icons/${iconType}.svg`}
    />
  );
};
export default Icon;
