export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_POKEMONS':
            return action.payload.map(pokemon => {
                return {
                    ...state,
                    id: pokemon.id,
                    num: pokemon.num,
                    name: pokemon.name,
                    img: pokemon.img,
                    type: pokemon.type
                }
            })
        default:
            return state;
    }
}