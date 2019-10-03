import React from 'react';
import ReactSVG from 'react-svg';

const Icon = (props) => {
    return(
        <ReactSVG src={process.env.PUBLIC_URL + `/icons/${props.iconType}.svg`}/>
    )
}
export default Icon;