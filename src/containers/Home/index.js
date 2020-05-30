import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './HomeContainer'
import NotFound from '../../components/exceptions/NotFound';

const Home = () => {
    return (
        <Fragment>
            <Switch>
                <Route path='/' component={Main} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default Home;