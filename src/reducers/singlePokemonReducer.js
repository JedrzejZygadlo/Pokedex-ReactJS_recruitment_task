import { FETCH_SINGLE_POKEMON_STARTED, FETCH_SINGLE_POKEMON_SUCCESS, FETCH_SINGLE_POKEMON_FAILED, DISPLAY_MODAL, HIDE_MODAL } from '../actions';


export default (state = { isLoading: false, modal: false }, action) => {
    console.log(state)
    switch(action.type) {
        case FETCH_SINGLE_POKEMON_STARTED:
            return {...state, isLoading: true}
        case FETCH_SINGLE_POKEMON_SUCCESS:
            const {id, num, name, img, type, candy,candy_count, height, weight, egg, spawn_chance, spawn_time, weaknesses} = action.payload
            return {...state, isLoading: false, pokemonInfo: {
                    id,
                    num,
                    name,
                    img,
                    type,
                    candy,
                    candy_count,
                    height,
                    weight,
                    egg,
                    spawn_chance,
                    spawn_time,
                    weaknesses
                }
            }
        case FETCH_SINGLE_POKEMON_FAILED:
            return {...state, isLoading: false, error: action.payload}
        case DISPLAY_MODAL:
            return {...state, modal: true, modalid: action.payload}
        case HIDE_MODAL:
            return {...state, modal: false, modalid: null}
        default:
            return state;
    }
}