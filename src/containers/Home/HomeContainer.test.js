import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router';

import ConnectedHomeContainer, { HomeContainer } from './HomeContainer';
import mockResponse from '../../../__mocks__/pokedex';
import Home from '../../components/Home';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const INITIAL_STATE = {
    pokedexes: { payload: { data: [] } },
    pokedexSearches: { payload: { data: [] } },
    pokedexDetails: { payload: { data: [] } },
    pokedexArray: { payload: [] },
    loading: false,
    errors: {}
}

const url = '/'

let wrapper, store;

describe('Home Container --- Home', () => {
    const props = {
        actions: {
            fetchPokedex: jest.fn(),
            searchPokedex: jest.fn(),
            cleanPokedex: jest.fn(),
            cleanPokedexArray: jest.fn(),
            fetchPokedexDetail: jest.fn(),
            pokedexArrayStoreRequest: jest.fn(),
        },
    };

    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = shallow(<HomeContainer {...props} store={store} />);
    });

    it('should render correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('should contain the Home', () => {
        expect(wrapper.containsMatchingElement(<Home />)).toEqual(true);
    });

    it('passes fetchPokedex to Home', () => {
        const fetchPokedex = wrapper.instance().fetchPokedex;
        expect(wrapper.find(Home).prop('fetchPokedex')).toEqual(fetchPokedex);
    });

    it('fetchPokedex should call fetchPokedex with the correct argument', () => {
        wrapper.instance().fetchPokedex();
        expect(props.actions.fetchPokedex).toHaveBeenCalledTimes(1);
        expect(props.actions.fetchPokedex).toHaveBeenCalledWith();
    });

    it('passes searchPokedex to Home', () => {
        const searchPokedex = wrapper.instance().searchPokedex;
        expect(wrapper.find(Home).prop('searchPokedex')).toEqual(searchPokedex);
    });

    it('searchPokedex should call searchPokedex with the correct argument', () => {
        wrapper.instance().searchPokedex(mockResponse.pokedexes);
        expect(props.actions.searchPokedex).toHaveBeenCalledTimes(1);
        expect(props.actions.searchPokedex).toHaveBeenCalledWith(mockResponse.pokedexes);
    });

    it('passes fetchPokedexDetail to Home', () => {
        const fetchPokedexDetail = wrapper.instance().fetchPokedexDetail;
        expect(wrapper.find(Home).prop('fetchPokedexDetail')).toEqual(fetchPokedexDetail);
    });

    it('fetchPokedexDetail should call fetchPokedexDetail with the correct argument', () => {
        wrapper.instance().fetchPokedexDetail(url);
        expect(props.actions.fetchPokedexDetail).toHaveBeenCalledTimes(1);
        expect(props.actions.fetchPokedexDetail).toHaveBeenCalledWith(url);
    });


    it('should have a prop cleanPokedex', () => {
        expect(wrapper.prop('cleanPokedex')).toBeDefined();
    });

    it('passes cleanPokedex to AddForm', () => {
        const cleanPokedex = wrapper.instance().cleanPokedex;
        expect(wrapper.find(Home).prop('cleanPokedex')).toEqual(cleanPokedex);
    });

    it('should have a prop cleanPokedexDetail', () => {
        expect(wrapper.prop('cleanPokedexDetail')).toBeDefined();
    });

    it('passes cleanPokedexDetail to AddForm', () => {
        const cleanPokedexDetail = wrapper.instance().cleanPokedexDetail;
        expect(wrapper.find(Home).prop('cleanPokedexDetail')).toEqual(cleanPokedexDetail);
    });

    it('should have a prop cleanPokedexArray', () => {
        expect(wrapper.prop('cleanPokedexArray')).toBeDefined();
    });

    it('passes cleanPokedexArray to AddForm', () => {
        const cleanPokedexArray = wrapper.instance().cleanPokedexArray;
        expect(wrapper.find(Home).prop('cleanPokedexArray')).toEqual(cleanPokedexArray);
    });

});

describe('Container --- ConnectedAddContainer', () => {
    let store;

    const props = {
        fetchPokedex: jest.fn(),
        searchPokedex: jest.fn(),
        cleanPokedex: jest.fn(),
        cleanPokedexArray: jest.fn(),
        fetchPokedexDetail: jest.fn(),
        pokedexArrayStoreRequest: jest.fn(),
    };

    beforeEach(() => {
        store = mockStore(INITIAL_STATE);
        wrapper = mount(
            <Provider store={store}>
                <Router>
                    <ConnectedHomeContainer>
                        <Home {...props} />
                    </ConnectedHomeContainer>
                </Router>
            </Provider>
        );
    });
});
