import {
    POKEDEX_ARRAY_STORE_REQUEST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
}

const pokedexArrayReducer = (state, action) => {
    state = state || INITIAL_STATE

    switch (action.type) {
        case POKEDEX_ARRAY_STORE_REQUEST:
            return Object.assign({}, state, {
                payload: action.data
            })
          
        default:
            return state;
    }
}

export default pokedexArrayReducer