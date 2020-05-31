import { pokedexFetchRequest, pokedexFetchRequestSuccess, pokedexFetchRequestfailure } from "../actions/pokedexAction"

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