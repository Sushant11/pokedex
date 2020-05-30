import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'

import { AsyncHome, AsyncNotFound } from './AsyncComponent';

const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={AsyncHome} />
                <Route component={AsyncNotFound} />
            </Switch>
        </Fragment>
    )
};

export default withRouter(App);