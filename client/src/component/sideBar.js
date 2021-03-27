import React, { Component } from "react";
import "../css/dashboard.css"
import { sideBarRoutes, routePathNames } from "../utils/constants"
import * as utils from "../utils/index";

class Sidebar extends Component {

    logout = () => {
        utils.logout();
        window.location.href = routePathNames.SIGNIN
    }

    render() {
        return (
            <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
                <ul class="list-group sticky-top sticky-offset">
                    {
                        sideBarRoutes.map((item) => {
                            return (
                                <a onClick={() => this.props.onChangeTab(item)} class={this.props.activeTab === item.name ? "active-list-item-style list-group-item list-group-item-action" : "inactive-list-item-style list-group-item list-group-item-action"} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">{item.name}</a>
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


