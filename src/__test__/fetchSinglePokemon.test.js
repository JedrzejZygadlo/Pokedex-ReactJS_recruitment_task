import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; 
import expect from 'expect';
import { FETCH_SINGLE_POKEMON_STARTED, FETCH_SINGLE_POKEMON_SUCCESS, FETCH_SINGLE_POKEMON_FAILED} from '../actions/actionTypes';
import { fetchSinglePokemon } from '../actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Test thunk action creator', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore({})
    const expectedActions = [ FETCH_SINGLE_POKEMON_STARTED, FETCH_SINGLE_POKEMON_SUCCESS ]

fetchMock.get('http://localhost:8000/pokemon/1', { response: 200 });
    return store.dispatch(fetchSinglePokemon(1))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })
     fetchMock.restore()
  })
  
})
