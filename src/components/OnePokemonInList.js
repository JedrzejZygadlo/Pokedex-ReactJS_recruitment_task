import React from 'react';
import Icon from './Icon'


export const renderTypes = (types) => {
    return types.map(type => {
        return <Icon iconType = {type} />;
        
    })};

const OnePokemonInList = (props) => {
    console.log(props);
    return(
            <div key={props.pokemon.id}>
                    <img src={props.pokemon.img} alt={props.pokemon.id}/>
                    <h1>#{props.pokemon.num} {props.pokemon.name}</h1>
                    {renderTypes(props.pokemon.type)}
            </div>
        )
}

export default OnePokemonInList;