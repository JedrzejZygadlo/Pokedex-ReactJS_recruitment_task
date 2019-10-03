import pokemonApi from "../api/pokemonApi";

export const fetchPokemons = () => async dispatch => {
    const response = await pokemonApi.get('/pokemon');
    dispatch({ type: 'FETCH_POKEMONS', payload: response.data});
}