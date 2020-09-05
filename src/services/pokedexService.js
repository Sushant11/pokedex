import { pokedexSearchFetchRequest, pokedexSearchFetchRequestSuccess, pokedexSearchFetchRequestFailure,pokedexFetchRequest, pokedexFetchRequestSuccess, pokedexFetchRequestFailure, pokedexDetailFetchRequest, pokedexDetailFetchRequestSuccess, pokedexDetailFetchRequestFailure } from "../actions/pokedexAction"
import { message } from 'antd';

export const fetchPokedex = () => {
    return dispatch => {
        dispatch(pokedexFetchRequest());
        return fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => {
                if (response) {
                    message.success('Fetched Sucessfully.');
                    dispatch(pokedexFetchRequestSuccess(response.results))
                }
                else {
                    message.warning('Please Try Again.');
                }
            })
            .catch(error => dispatch(pokedexFetchRequestFailure(error.data.data)))
    }
}

export const searchPokedex = (data) => {
    return dispatch => {
        dispatch(pokedexSearchFetchRequest());
        return fetch(`https://pokeapi.co/api/v2/${data.para}/${data.poke}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    message.success('Fetched Sucessfully.');
                    dispatch(pokedexSearchFetchRequestSuccess(response))
                    // dispatch(pokedexDetailCleanRequest)
                }
                else {
                    message.warning('Please Try Again.');
                }
            })
            .catch( error => message.warning('Pokemon Not Found! Please try again.'),5000)
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
                    message.warning('Please Try Again.');
                }
            })
            .catch(error => dispatch(pokedexDetailFetchRequestFailure(error.data.data)))
    }
}