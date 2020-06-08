import { pokedexFetchRequest, pokedexFetchRequestSuccess, pokedexFetchRequestfailure, pokedexDetailFetchRequest, pokedexDetailFetchRequestSuccess, pokedexDetailFetchRequestfailure } from "../actions/pokedexAction"

export const fetchPokedex = () => {
    return dispatch => {
        dispatch(pokedexFetchRequest());
        return fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => {
                if (response) {
                    dispatch(pokedexFetchRequestSuccess(response.results))
                }
                else {
                    //
                }
            })
            .catch(error => dispatch(pokedexFetchRequestfailure(error.data.data)))
    }
}

export const fetchPokedexDetail = (url) => {
    return dispatch => {
        dispatch(pokedexDetailFetchRequest());
        return fetch(url)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    dispatch(pokedexDetailFetchRequestSuccess(response))
                }
                else {
                    //
                    console.log('Error :>>');
                }
            })
            .catch(error => dispatch(pokedexDetailFetchRequestfailure(error.data.data)))
    }
}