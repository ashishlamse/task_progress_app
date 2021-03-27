// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import TicketPannelCard from "../component/TicketPannelCard";

class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            ticketArr: [
                {
                    "id": 1111,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "High",
                    "status": "Verified",
                    createdBy: "yrg"
                },
                {
                    "id": 1112,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "Low",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1113,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "Low",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1114,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "High",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1115,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "High",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1116,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "High",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1117,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "Medium",
                    "status": "Verified",
                    createdBy: "yrg"
                }, {
                    "id": 1119,
                    "deadline": "DateObject",
                    "task_name": "demo",
                    "description": "demo testing",
                    "priority": "High",
                    "status": "Verified",
                    createdBy: "yrg"
                },

            ]
        };
    }

    render() {
        return (
            <div className="container-fluid row parent-div center" >
                <div className="col-md-12 col-sm-12 div-center-align-bread">
                    <span className="parent">
                        {"Task List"}
                    </span>
                </div>
                <div className="row" style={{ marginTop: 25 }}>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <TicketPannelCard
                            title={"All task"}
                            data={this.state.ticketArr}
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <TicketPannelCard
                            title={"Submitted task"}
                            data={this.state.ticketArr}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;
