import pokdexArray from './pokdexArray'

import mockResponse from '../../__mocks__/pokedex';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {}
}

const payload = mockResponse.pokedexes.results;

describe('REDUCER -- pokedexArray', () => {

    it('should handle the POKEDEX_ARRAY_STORE_REQUEST', () => {
        const state = pokdexArray(INITIAL_STATE, {
            type: 'POKEDEX_ARRAY_STORE_REQUEST',
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the POKEDEX_ARRAY_CLEAN_REQUEST', () => {
        const state = pokdexArray(INITIAL_STATE, {
            type: 'POKEDEX_ARRAY_CLEAN_REQUEST',
        });
        expect(state).toEqual({
            payload: [],
            loading: false,
            errors: {},
        });
    });

})