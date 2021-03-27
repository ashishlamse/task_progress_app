import React, { Component } from "react";
import "../css/dashboard.css"
import Sidebar from '../component/sideBar';
import Header from '../component/header';
import {routePathNames} from '../utils/constants';
import CreateTask from '../container/createTask'
import {
    BrowserRouter as Redirect,
    Router,
    Route,
    Link,
    Switch,
  } from "react-router-dom";
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "Create Task",
        };
    }

    onChangeTab = (item) =>{
        this.setState({
            activeTab:item.name
        })
    }

    render() {
        return (
            <>
                <Header/>
                <div class="row" id="body-row">
                    <Sidebar 
                        activeTab={this.state.activeTab}
                        onChangeTab={this.onChangeTab}
                    />
                    {/* routes */}
                    <div class="col">
                    <Switch>
                        <Route
                        path={routePathNames.SIGNIN}
                        render={(routeProps) => <CreateTask {...routeProps} />}
                        />
                    </Switch>
                    </div>     
                </div>
                {/* Footer CopyRight */}
                <div className="copyright-footer">© Copyright:
                        <a href="http://www.knexinc.com/"> KNEX INC</a>
                </div> 
            </>
        );
    }
}

export default DashBoard;
