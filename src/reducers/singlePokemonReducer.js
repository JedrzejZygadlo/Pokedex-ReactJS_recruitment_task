import { FETCH_SINGLE_POKEMON_STARTED, FETCH_SINGLE_POKEMON_SUCCESS, FETCH_SINGLE_POKEMON_FAILED } from '../actions';


export default (state = { isLoading: false }, action) => {
    console.log(state)
    switch(action.type) {
        case FETCH_SINGLE_POKEMON_STARTED:
            return {...state, isLoading: true}
        case FETCH_SINGLE_POKEMON_SUCCESS:
            return {...state, isLoading: false, pokemonInfo: {
                    id: action.payload.id,
                    num: action.payload.num,
                    name: action.payload.name,
                    img: action.payload.img,
                    type: action.payload.type
                }
            }
        case FETCH_SINGLE_POKEMON_FAILED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}