import {
    POKEDEX_FETCH_REQUEST,
    POKEDEX_FETCH_REQUEST_SUCCESS,
    POKEDEX_FETCH_REQUEST_FAILURE,
    POKEDEX_DETAIL_FETCH_REQUEST,
    POKEDEX_DETAIL_FETCH_REQUEST_SUCCESS,
    POKEDEX_DETAIL_FETCH_REQUEST_FAILURE
} from "../constants/actionTypes"

export const pokedexFetchRequest = () => {
    return {
        type: POKEDEX_FETCH_REQUEST
    }
}

export const pokedexFetchRequestSuccess = data => {
    return {
        type: POKEDEX_FETCH_REQUEST_SUCCESS,
        data,
    }
}

export const pokedexFetchRequestfailure = data => {
    return {
        type: POKEDEX_FETCH_REQUEST_FAILURE,
        data,
    }
}

export const pokedexDetailFetchRequest = () => {
    return {
        type: POKEDEX_DETAIL_FETCH_REQUEST
    }
}

export const pokedexDetailFetchRequestSuccess = data => {
    return {
        type: POKEDEX_DETAIL_FETCH_REQUEST_SUCCESS,
        data,
    }
}

export const pokedexDetailFetchRequestfailure = data => {
    return {
        type: POKEDEX_DETAIL_FETCH_REQUEST_FAILURE,
        data,
    }
}

