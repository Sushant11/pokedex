import {
    POKEDEX_FETCH_REQUEST,
    POKEDEX_CLEAN_REQUEST,
    POKEDEX_FETCH_REQUEST_SUCCESS,
    POKEDEX_FETCH_REQUEST_FAILURE,
} from "../constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {}
}

const pokedexReducer = (state, action) => {
    state = state || INITIAL_STATE

    switch (action.type) {
        case POKEDEX_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case POKEDEX_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {}
            })

        case POKEDEX_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error
            })
            
        case POKEDEX_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: {}
            })

        default:
            return state;
    }
}

export default pokedexReducer