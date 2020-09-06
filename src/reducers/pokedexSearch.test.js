import pokedexSearch from './pokedexSearch'

import mockResponse from '../../__mocks__/pokedex';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {}
}

const payload = mockResponse.pokemon.results;
const error = mockResponse.pokedexErrors;


describe('REDUCER -- pokedexSearch', () => {
    it('should return Pokedex Initial State', () => {
        expect(pokedexSearch(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle the POKEDEX_SEARCH_FETCH_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = pokedexSearch(INITIAL_STATE, { type: 'POKEDEX_SEARCH_FETCH_REQUEST', loading: true });
        expect(state).toEqual({ loading: true });
    });

    it('should handle the POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS', () => {
        const state = pokedexSearch(INITIAL_STATE, {
            type: 'POKEDEX_SEARCH_FETCH_REQUEST_SUCCESS',
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the POKEDEX_SEARCH_FETCH_REQUEST_FAILURE', () => {
        const INITIAL_STATE = {
            loading: false,
            errors: {},
        };
        const state = pokedexSearch(INITIAL_STATE, {
            type: 'POKEDEX_SEARCH_FETCH_REQUEST_FAILURE',
            error: error,
        });
        expect(state).toEqual({ loading: false, errors: error });
    });

    it('should handle the POKEDEX_SEARCH_CLEAN_REQUEST', () => {
        const state = pokedexSearch(INITIAL_STATE, {
            type: 'POKEDEX_SEARCH_CLEAN_REQUEST',
        });
        expect(state).toEqual({
            payload: [],
            loading: false,
            errors: {},
        });
    });

})