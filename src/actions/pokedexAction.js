import {
    POKEDEX_FETCH_REQUEST,
    POKEDEX_FETCH_REQUEST_SUCCESS,
    POKEDEX_FETCH_REQUEST_FAILURE,
    POKEDEX_SEARCH_FETCH_REQUEST,
    POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS,
    POKEDEX_SEARCH_FETCH_REQUEST_FAILURE,
    POKEDEX_DETAIL_FETCH_REQUEST,
    POKEDEX_DETAIL_FETCH_REQUEST_SUCCESS,
    POKEDEX_DETAIL_FETCH_REQUEST_FAILURE,
    POKEDEX_ARRAY_STORE_REQUEST,
    POKEDEX_CLEAN_REQUEST,
    POKEDEX_DETAIL_CLEAN_REQUEST,
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

export const pokedexFetchRequestFailure = data => {
    return {
        type: POKEDEX_FETCH_REQUEST_FAILURE,
        data,
    }
}

export const pokedexSearchFetchRequest = () => {
    return {
        type: POKEDEX_SEARCH_FETCH_REQUEST
    }
}

export const pokedexSearchFetchRequestSuccess = data => {
    return {
        type: POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS,
        data,
    }
}

export const pokedexSearchFetchRequestFailure = data => {
    return {
        type: POKEDEX_SEARCH_FETCH_REQUEST_FAILURE,
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

export const pokedexDetailFetchRequestFailure = data => {
    return {
        type: POKEDEX_DETAIL_FETCH_REQUEST_FAILURE,
        data,
    }
}

export const pokedexArrayStoreRequest = data => {
    console.log('data :>> ', data);
    return {
        type: POKEDEX_ARRAY_STORE_REQUEST,
        data,
    }
}
export const pokedexCleanRequest = () => {
    return {
        type: POKEDEX_CLEAN_REQUEST,
    }
}

export const pokedexDetailCleanRequest = () => {
    return {
        type: POKEDEX_DETAIL_CLEAN_REQUEST,
    }
}
