import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './AppLayout';
import AuthLayout from './AuthLayout';

import NotFound from './NotFound';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/app" component={AppLayout} />
                    <Route path="/" component={AuthLayout} />
                </Switch>
            </BrowserRouter>
        );
    }
}
