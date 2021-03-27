import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import { routePathNames } from '../src/utils/constants'
import SignIn from "./container/signIn";
import SignUp from "./container/signUp";
import DashBoard from "./container/dashboard";

import "./css/createTask.css"
import "./css/task.css"

const history = createBrowserHistory();

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL} history={history}>
                <Route exact path={routePathNames.SIGNIN} render={(routeProps) => <SignIn {...routeProps} />} />
                <Route exact path={routePathNames.SIGNUP} render={(routeProps) => <SignUp {...routeProps} />} />
                <Switch>
                    <Route path={routePathNames.DASHBOARD} render={(routeProps) => <DashBoard {...routeProps} />} />
                </Switch>
            </Router>
        );
    }
}


export default App;
