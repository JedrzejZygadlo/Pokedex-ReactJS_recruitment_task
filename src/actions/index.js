import pokemonApi from "../api/pokemonApi";

export const FETCH_POKEMONS_PAGE_STARTED = "FETCH_POKEMONS_PAGE_STARTED";
export const FETCH_POKEMONS_PAGE_SUCCESS = "FETCH_POKEMONS_PAGE_SUCCESS";
export const FETCH_POKEMONS_PAGE_FAILED = "FETCH_POKEMONS_PAGE_FAILED";
export const FETCH_SINGLE_POKEMON_STARTED = "FETCH_SINGLE_POKEMON_STARTED";
export const FETCH_SINGLE_POKEMON_SUCCESS = "FETCH_SINGLE_POKEMON_SUCCESS"
export const FETCH_SINGLE_POKEMON_FAILED = "FETCH_SINGLE_POKEMON_FAILED";
export const DISPLAY_MODAL = "DISPLAY_MODAL";
export const HIDE_MODAL = "HIDE_MODAL"
/*
export const fetchPokemons = () => async dispatch => {
    const response = await pokemonApi.get('/pokemon');
    dispatch({ type: 'FETCH_POKEMONS', payload: response.data});
}
*/

export const fetchPokemonsPage = (page) => async dispatch => {
    try {
        dispatch({ type: FETCH_POKEMONS_PAGE_STARTED});
        const response = await pokemonApi.get(`/pokemon?_page=${page}&_limit=20`);
        console.log(response);
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