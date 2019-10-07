import React from 'react';
import { useSelector } from 'react-redux';

import SinglePokemonInfo from './SinglePokemonInfo';

const PokemonModal = () => {
  const singlePokemon = useSelector(state => state.singlePokemon);
  const { modal } = singlePokemon;
  let content;

  if (modal) {
    content = <SinglePokemonInfo />;
  } else {
    content = null;
  }

  return content;
};

export default PokemonModal;
