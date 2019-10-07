import pokemonListReducer from '../reducers/pokemonListReducer';
import { FETCH_POKEMONS_PAGE_STARTED } from '../actions/actionTypes';

it('handles actions of type FETCH_POKEMONS_PAGE_STARTED', () => {
  const action = {
    type: FETCH_POKEMONS_PAGE_STARTED,
  };

  const newState = pokemonListReducer({ pokemons: {}, isLoading: false }, action);

  expect(newState).toEqual({ pokemons: {}, isLoading: true });
});

it('handles action with unknown type', () => {
  const newState = pokemonListReducer([], { type: 'LKAFDSJLKAFD' });

  expect(newState).toEqual([]);
});