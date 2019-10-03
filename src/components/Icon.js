import React from 'react';
import ReactSVG from 'react-svg';
import './Icon.css';
const Icon = (props) => {
    return(
        <ReactSVG className="icon" src={process.env.PUBLIC_URL + `/icons/${props.iconType}.svg`} />
    )
}
export default Icon;