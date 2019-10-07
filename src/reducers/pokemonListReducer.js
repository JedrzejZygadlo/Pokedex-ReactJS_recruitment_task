import {
  FETCH_POKEMONS_PAGE_STARTED,
  FETCH_POKEMONS_PAGE_SUCCESS,
  FETCH_POKEMONS_PAGE_FAILED
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
    default:
      return state;
  }
};
