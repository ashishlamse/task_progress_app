import React, { Component } from "react";
import "../css/dashboard.css"
import Sidebar from '../component/sideBar';
import Header from '../component/header';
import {routePathNames} from '../utils/constants';
import CreateTask from '../container/createTask'
import TaskList from '../container/taskList'
import {
    BrowserRouter as Redirect,
    Router,
    Route,
    Link,
    Switch,
  } from "react-router-dom";
  import TaskAnalytics from './taskAnalytics';

  
class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    onChangeTab = (item) =>{
        this.props.history.push(item.path)
    }

    render() {
        return (
            <>
                <Header/>
                <div class="row" id="body-row">
                    <Sidebar 
                        onChangeTab={this.onChangeTab}
                        {...this.props}
                    />
                    {/* routes */}
                    <div class="col">
                    <Switch>
                        <Route
                        exact
                        path={routePathNames.CREATE_TASK}
                        render={(routeProps) => <CreateTask {...routeProps} />}
                        />
                        <Route
                        exact
                        path={routePathNames.UPDATE_TASK}
                        render={(routeProps) => <CreateTask {...routeProps} />}
                        />
                        <Route
                        exact
                        path={routePathNames.TASK_LIST}
                        render={(routeProps) => <TaskList {...routeProps} />}
                        />
                        <Route
                        exact
                        path={routePathNames.CHARTS}
                        render={(routeProps) => <TaskAnalytics {...routeProps} />}
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
