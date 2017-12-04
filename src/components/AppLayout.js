import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import Account from './Account';

export default class AppLayout extends React.Component {
    render() {
        return (
            <div className="app">
                <nav>
                    <ul className="app__nav">
                        <li>
                            <Link to="dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="account">Account</Link>
                        </li>
                    </ul>
                </nav>
                <div className="app__content">{this.props.children}</div>
                <Switch>
                    <Route path="/app/account" component={Account} />
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Redirect from="/app" to="/app/dashboard" />
                </Switch>
            </div>
        );
    }
}
