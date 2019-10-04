import pokemonApi from "../api/pokemonApi";

export const FETCH_POKEMONS_PAGE_STARTED = "FETCH_POKEMONS_PAGE_STARTED";
export const FETCH_POKEMONS_PAGE_SUCCESS = "FETCH_POKEMONS_PAGE_SUCCESS";
export const FETCH_POKEMONS_PAGE_FAILED = "FETCH_POKEMONS_PAGE_FAILED";

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
        dispatch({ type: FETCH_POKEMONS_PAGE_SUCCESS, payload: response.data});
    } catch(err) {
        dispatch({ type: FETCH_POKEMONS_PAGE_FAILED, payload: err});
    }
}