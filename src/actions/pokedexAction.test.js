import mockResponse from '../../__mocks__/pokedex';

import {
    pokedexFetchRequest,
    pokedexFetchRequestSuccess,
    pokedexFetchRequestFailure,
    pokedexSearchFetchRequest,
    pokedexSearchFetchRequestSuccess,
    pokedexSearchFetchRequestFailure,
    pokedexDetailFetchRequest,
    pokedexDetailFetchRequestSuccess,
    pokedexDetailFetchRequestFailure,
    pokedexArrayStoreRequest,
    pokedexCleanRequest,
    pokedexDetailCleanRequest,
    pokedexArrayCleanRequest
} from "./pokedexAction";

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
    POKEDEX_ARRAY_CLEAN_REQUEST
} from "../constants/actionTypes";


describe('ACTION --- pokedexAction', () => {
    it('should handle POKEDEX_FETCH_REQUEST', () => {
        const fetchRequest = pokedexFetchRequest();
        expect(fetchRequest).toEqual(
            {
                type: POKEDEX_FETCH_REQUEST
            }
        )
    });

    it('should handle POKEDEX_FETCH_REQUEST_SUCCESS', () => {
        const fetchRequestSuccess = pokedexFetchRequestSuccess(mockResponse.pokedexes.results);
        expect(fetchRequestSuccess).toEqual(
            {
                type: POKEDEX_FETCH_REQUEST_SUCCESS,
                data: mockResponse.pokedexes.results
            }
        )
    });

    it('should handle POKEDEX_FETCH_REQUEST_FAILURE', () => {
        const fetchRequestFailure = pokedexFetchRequestFailure(mockResponse.pokedexErrors.data);
        expect(fetchRequestFailure).toEqual(
            {
                type: POKEDEX_FETCH_REQUEST_FAILURE,
                error: mockResponse.pokedexErrors.data
            }
        )
    });

    it('should handle POKEDEX_SEARCH_FETCH_REQUEST', () => {
        const searchFetchRequest = pokedexSearchFetchRequest();
        expect(searchFetchRequest).toEqual(
            {
                type: POKEDEX_SEARCH_FETCH_REQUEST
            }
        )
    });

    it('should handle POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS', () => {
        const searchFetchRequestSuccess = pokedexSearchFetchRequestSuccess(mockResponse.pokedexes.results);
        expect(searchFetchRequestSuccess).toEqual(
            {
                type: POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS,
                data: mockResponse.pokedexes.results
            }
        )
    });

    it('should handle POKEDEX_SEARCH_FETCH_REQUEST_FAILURE', () => {
        const searchfetchRequestFailure = pokedexSearchFetchRequestFailure(mockResponse.pokedexErrors.data);
        expect(searchfetchRequestFailure).toEqual(
            {
                type: POKEDEX_SEARCH_FETCH_REQUEST_FAILURE,
                error: mockResponse.pokedexErrors.data
            }
        )
    });

    it('should handle POKEDEX_DETAIL_FETCH_REQUEST', () => {
        const detailFetchRequest = pokedexDetailFetchRequest();
        expect(detailFetchRequest).toEqual(
            {
                type: POKEDEX_DETAIL_FETCH_REQUEST
            }
        )
    });

    it('should handle POKEDEX_DETAIL_FETCH_REQUEST_SUCCESS', () => {
        const detailFetchRequestSuccess = pokedexDetailFetchRequestSuccess(mockResponse.pokemon.results);
        expect(detailFetchRequestSuccess).toEqual(
            {
                type: POKEDEX_DETAIL_FETCH_REQUEST_SUCCESS,
                data: mockResponse.pokemon.results
            }
        )
    });

    it('should handle POKEDEX_DETAIL_FETCH_REQUEST_FAILURE', () => {
        const detailFetchRequestFailure = pokedexDetailFetchRequestFailure(mockResponse.pokedexErrors.data);
        expect(detailFetchRequestFailure).toEqual(
            {
                type: POKEDEX_DETAIL_FETCH_REQUEST_FAILURE,
                error: mockResponse.pokedexErrors.data
            }
        )
    });

    it('should handle POKEDEX_ARRAY_STORE_REQUEST', () => {
        const arrayStoreRequest = pokedexArrayStoreRequest(mockResponse.pokemon.results);
        expect(arrayStoreRequest).toEqual(
            {
                type: POKEDEX_ARRAY_STORE_REQUEST,
                data: mockResponse.pokemon.results
            }
        )
    });

    it('should handle POKEDEX_CLEAN_REQUEST', () => {
        const cleanRequest = pokedexCleanRequest();
        expect(cleanRequest).toEqual({ type: POKEDEX_CLEAN_REQUEST });
    });
    
    it('should handle POKEDEX_DETAIL_CLEAN_REQUEST', () => {
        const detailCleanRequest = pokedexDetailCleanRequest();
        expect(detailCleanRequest).toEqual({ type: POKEDEX_DETAIL_CLEAN_REQUEST });
    });
    
    it('should handle POKEDEX_ARRAY_CLEAN_REQUEST', () => {
        const arrayCleanRequest = pokedexArrayCleanRequest();
        expect(arrayCleanRequest).toEqual({ type: POKEDEX_ARRAY_CLEAN_REQUEST });
    });

})