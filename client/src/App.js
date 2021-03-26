import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import { routePathNames } from '../src/utils/constants'
import SignIn from "./container/signIn";
import SignUp from "./container/signUp";

const history = createBrowserHistory();

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL} history={history}>
                <Route exact path={routePathNames.SIGNIN} component={SignIn} />
                <Route exact path={routePathNames.SIGNUP} component={SignUp} />
                <Switch>
                    {/* <Route path={routePathNames.DASHBOARD} component={Dashboard} /> */}
                </Switch>
            </Router>
        );
    }
}


export default App;
