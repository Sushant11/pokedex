import React, { Suspense } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import App from './index';

import {
    AsyncHome,
} from './AsyncComponent'

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

const INITIAL_STATE = {
    pokedexes: { payload: { data: [] } },
    pokedexSearches: { payload: { data: [] } },
    pokedexDetails: { payload: { data: [] } },
    pokedexArray: { payload: [] },
    loading: false,
    errors: {}
}

const store = mockStore(INITIAL_STATE)

const mountHome = () => {
    return mount(
        <Suspense fallback>
            <Provider store={store}>
                <Router initialEntries={['/']}>
                    <App />
                </Router>
            </Provider>
        </Suspense>
    );
};

describe('Container --- App', () => {
    it('routes / to AsyncHome', () => {
        const wrapper = mountHome();
        expect(wrapper.find('Route[path="/"]').props().component).toBe(AsyncHome);
    });

})