import pokemonApi from '../api/pokemonApi';
import {
  FETCH_POKEMONS_PAGE_SUCCESS,
  FETCH_POKEMONS_PAGE_STARTED,
  FETCH_POKEMONS_PAGE_FAILED,
  FETCH_SINGLE_POKEMON_STARTED,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILED,
  DISPLAY_MODAL,
  HIDE_MODAL,
  SET_POKEMON_LIST_STATUS,
  FETCH_POKEMONS_BY_NAME,
  FETCH_POKEMONS_BY_NAME_NO_RESULTS,
  SET_SEARCH_VALUE,
  FETCH_POKEMONS_BY_NAME_FAILED
} from './actionTypes';
import history from '../history';

export const fetchPokemonsByName = (name,page) => async dispatch => {
  try {
    const response = await pokemonApi.get(`/pokemon?name_like=${name}&_page=${page}&_limit=20`);
    if(response.data.length === 0){
      dispatch({type :  FETCH_POKEMONS_BY_NAME_NO_RESULTS})
    } else {
      dispatch({type :  FETCH_POKEMONS_BY_NAME, payload: response})
    }
  } catch(err) {
    dispatch({ type: FETCH_POKEMONS_BY_NAME_FAILED, payload: err });
  }
}

export const fetchPokemonsPage = page => async dispatch => {
  try {
    dispatch({ type: FETCH_POKEMONS_PAGE_STARTED });
    const response = await pokemonApi.get(`/pokemon?_page=${page}&_limit=20`);
    dispatch({ type: FETCH_POKEMONS_PAGE_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: FETCH_POKEMONS_PAGE_FAILED, payload: err });
  }
};
export const fetchSinglePokemon = id => async dispatch => {
  try {
    dispatch({ type: FETCH_SINGLE_POKEMON_STARTED });
    const response = await pokemonApi.get(`/pokemon/${id}`);
    dispatch({ type: FETCH_SINGLE_POKEMON_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_SINGLE_POKEMON_FAILED, payload: err });
  }
};
export const displayModal = id => {
  return { type: DISPLAY_MODAL, payload: id };
};

export const hideModal = () => {
  return { type: HIDE_MODAL };
};

export const setPokemonListStatus = (status,searchValue) => {
  history.push(`/search/${searchValue}/1`);
  return { type: SET_POKEMON_LIST_STATUS, payload: status }
  
};

export const setSearchValueInStore = (value) => {
  return { type: SET_SEARCH_VALUE, payload: value };
}