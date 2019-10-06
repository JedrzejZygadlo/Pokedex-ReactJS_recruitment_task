import pokemonApi from "../api/pokemonApi";
import {
    FETCH_POKEMONS_PAGE_SUCCESS,
    FETCH_POKEMONS_PAGE_STARTED,
    FETCH_POKEMONS_PAGE_FAILED,
    FETCH_SINGLE_POKEMON_STARTED,
    FETCH_SINGLE_POKEMON_SUCCESS,
    FETCH_SINGLE_POKEMON_FAILED,
    DISPLAY_MODAL,
    HIDE_MODAL
} from './actionTypes';
import history from '../history';

export const fetchPokemonsPage = (page) => async dispatch => {
    try {
        dispatch({ type: FETCH_POKEMONS_PAGE_STARTED});
        const response = await pokemonApi.get(`/pokemon?_page=${page}&_limit=20`);
        dispatch({ type: FETCH_POKEMONS_PAGE_SUCCESS, payload: response});
        } catch(err) {
        dispatch({ type: FETCH_POKEMONS_PAGE_FAILED, payload: err});
    }
}
export const fetchSinglePokemon = (id) => async dispatch => {
    try {
        dispatch({ type: FETCH_SINGLE_POKEMON_STARTED});
        const response = await pokemonApi.get(`/pokemon/${id}`);
        console.log(response);
        dispatch({ type: FETCH_SINGLE_POKEMON_SUCCESS, payload: response.data});
    } catch(err) {
        dispatch({ type: FETCH_SINGLE_POKEMON_FAILED, payload: err});
    }
}
export const displayModal = (id) => {
    return {type: DISPLAY_MODAL, payload: id};
}

export const hideModal = () => {
    return {type: HIDE_MODAL}
}