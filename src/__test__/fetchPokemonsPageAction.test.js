import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { FETCH_POKEMONS_PAGE_STARTED, FETCH_POKEMONS_PAGE_SUCCESS, FETCH_POKEMONS_PAGE_FAILED} from '../actions/actionTypes';
import { fetchPokemonsPage } from '../actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Test thunk action creator', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore({ pokemons: {}, isLoading: true })
    const expectedActions = [ 
        FETCH_POKEMONS_PAGE_STARTED, 
        FETCH_POKEMONS_PAGE_SUCCESS
    ]

    fetchMock.get('http://localhost:8000/pokemon?_page=1&_limit=20', { response: 200 })

    return store.dispatch(fetchPokemonsPage(1))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })
  })

})