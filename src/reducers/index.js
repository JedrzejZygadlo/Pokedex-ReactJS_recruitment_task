import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import singlePokemonReducer from './singlePokemonReducer';

export default combineReducers({
    pokemonList: pokemonListReducer,
    singlePokemon: singlePokemonReducer
})