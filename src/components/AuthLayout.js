import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

export default class AuthLayout extends React.Component {
    render() {
        return (
            <div className="auth">
                <nav>
                    <ul className="auth__nav">
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
                <div className="auth__content">{this.props.children}</div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}
