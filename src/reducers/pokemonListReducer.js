import {
  FETCH_POKEMONS_PAGE_STARTED,
  FETCH_POKEMONS_PAGE_SUCCESS,
  FETCH_POKEMONS_PAGE_FAILED,
  SET_POKEMON_LIST_STATUS,
  FETCH_POKEMONS_BY_NAME,
  FETCH_POKEMONS_BY_NAME_NO_RESULTS,
  SET_SEARCH_VALUE
} from '../actions/actionTypes';

export default (state = { pokemons: {}, isLoading: true }, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_PAGE_STARTED:
      return { ...state, isLoading: true };
    case FETCH_POKEMONS_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allPokemonsCount: action.payload.headers['x-total-count'],
        pokemons: action.payload.data.map(pokemon => {
          return {
            id: pokemon.id,
            num: pokemon.num,
            name: pokemon.name,
            img: pokemon.img,
            type: pokemon.type
          };
        })
      };
    case FETCH_POKEMONS_PAGE_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case SET_POKEMON_LIST_STATUS:
      return { ...state, status: action.payload };
    case FETCH_POKEMONS_BY_NAME:
      return {
        ...state,
        isLoading: false,
        allPokemonsCount: action.payload.headers['x-total-count'],
        pokemons: action.payload.data.map(pokemon => {
          return {
            id: pokemon.id,
            num: pokemon.num,
            name: pokemon.name,
            img: pokemon.img,
            type: pokemon.type
          };
        })
      };
    case FETCH_POKEMONS_BY_NAME_NO_RESULTS:
      return {
        ...state,
        isLoading: false,
        error: {
          message: 'There are no pokemon that names contain the search phrase'
        }
      };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
