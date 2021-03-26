import React from "react";
import ReactDOM from "react-dom";

// Required for Redux store setup
import { Provider } from "react-redux";
import configureStore from "./store";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import './fonts/Montserrat-Regular.ttf'
import './fonts/Montserrat-SemiBold.ttf'
import './fonts/Montserrat-Bold.ttf'

import { createBrowserHistory } from "history";
import NetworkService from "./network-service"

const history = createBrowserHistory();

NetworkService.setupInterceptors(configureStore(), history);


ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
    , document.getElementById("root")
);
registerServiceWorker();
