// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { FaUserAlt } from "react-icons/fa";

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let priority = this.props.ticketDetails["priority"];
    let color = "#ea7d24";
    if (priority === "High") {
      color = "#ce0000";
    } else if (priority === "Low") {
      color = "#f99d9d";
    }
    return (
      <div className="col-sm-6 remove-cols-padding" style={{ marginTop: 5 }}>
        <div className="card bg-light text-dark">
          <div className="card-header" style={{ textAlign: "left" }}>
            {this.props.ticketDetails["id"]}
          </div>
          <div className="card-body">
            <h5 style={{ fontWeight: "bold", textAlign: "left" }}>
              {this.props.ticketDetails["task_name"]}
            </h5>
            <div>
              <span style={{ float: "left" }}>{"Priority :"}</span>
              <span style={{ color: color, paddingLeft: "5px" }}>
                {this.props.ticketDetails["priority"]}
              </span>
            </div>
          </div>
          <div class="card-footer" style={{ backgroundColor: "white" }}>
            <span className="num-of-line-1" style={{ float: "left" }}>
              Created by : {this.props.ticketDetails["createdBy"]}
            </span>
            {/* <span style={{ float: "right" }}>
              <FaUserAlt />
            </span> */}
          </div>
        </div>
      </div>
    );
  }
}
