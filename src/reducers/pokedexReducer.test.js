import pokedexReducer from './pokedexReducer'

import mockResponse from '../../__mocks__/pokedex';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {}
}

const payload = mockResponse.pokedexes.results;
const error = mockResponse.pokedexErrors;


describe('REDUCER -- pokedexReducer', () => {
    it('should return Pokedex Initial State', () => {
        expect(pokedexReducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle the POKEDEX_FETCH_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = pokedexReducer(INITIAL_STATE, { type: 'POKEDEX_FETCH_REQUEST', loading: true });
        expect(state).toEqual({ loading: true });
    });

    it('should handle the POKEDEX_FETCH_REQUEST_SUCCESS', () => {
        const state = pokedexReducer(INITIAL_STATE, {
            type: 'POKEDEX_FETCH_REQUEST_SUCCESS',
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the POKEDEX_FETCH_REQUEST_FAILURE', () => {
        const INITIAL_STATE = {
            loading: false,
            errors: {},
        };
        const state = pokedexReducer(INITIAL_STATE, {
            type: 'POKEDEX_FETCH_REQUEST_FAILURE',
            error: error,
        });
        expect(state).toEqual({ loading: false, errors: error });
    });

    it('should handle the POKEDEX_CLEAN_REQUEST', () => {
        const state = pokedexReducer(INITIAL_STATE, {
            type: 'POKEDEX_CLEAN_REQUEST',
        });
        expect(state).toEqual({
            payload: [],
            loading: false,
            errors: {},
        });
    });

})