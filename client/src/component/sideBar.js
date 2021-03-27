import React, { Component } from "react";
import "../css/dashboard.css"
import { sideBarRoutes, routePathNames } from "../utils/constants"
import * as utils from "../utils/index";

class Sidebar extends Component {

    logout = () => {
        utils.logout();
        window.location.href = routePathNames.SIGNIN
    }

    handleHeading = () => {
        let routeName = this.props.location;
        let pathname = routeName.pathname;
        let temp = pathname.split("/");
        let name = temp[2];
        console.log("handleHeading ~ name", name);
        switch (name) {
            case "createTask":
                return "Create Task";
                break;
            case "taskList":
                return "Task List";
                break;
            case "statistics":
                return "Statistics";
                break;
            case "updateTask":
                return "Create Task";
                break;
            default:
                return "Task List";
        }
    };

    render() {
        return (
            <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
                <ul class="list-group sticky-top sticky-offset">
                    {
                        sideBarRoutes.map((item) => {
                            return (
                                <a onClick={() => this.props.onChangeTab(item)} class={this.handleHeading() === item.name ? "active-list-item-style list-group-item list-group-item-action" : "inactive-list-item-style list-group-item list-group-item-action"} id="list-home-list" data-toggle="list" role="tab" aria-controls="home">{item.name}</a>
                            )
                        })
                    }
                    <div className="logout-btn" onClick={this.logout}>
                        Logout
                    </div>
                </ul>

            </div>
        );
    }
}

export default Sidebar;


