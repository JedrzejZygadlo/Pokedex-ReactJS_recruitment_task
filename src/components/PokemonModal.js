import React from 'react';
import { useSelector } from 'react-redux';

import SinglePokemonInfo from './SinglePokemonInfo';

const PokemonModal = () => {
  const singlePokemon = useSelector(state => state.singlePokemon);
  const { modal } = singlePokemon;
  const renderContent = () => {
    switch(true){
      case modal:
        return <SinglePokemonInfo />;
      default:
        return null;
    }
  }
  return renderContent();
};

export default PokemonModal;
