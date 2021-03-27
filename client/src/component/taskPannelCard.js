// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Card from "./Card";
import EmptyPage from './emptyPage';

export default class TaskPannelCard extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card bg-light text-dark">
              <div className="card-header">
                {this.props.title}
              </div>
              <div
                className="card-body card-deck"
                style={{ backgroundColor: "white" }}
              >
                {this.props.data && this.props.data.length
                  ? this.props.data.map((item) => {
                    return <Card
                      title={this.props.title}
                      taskDetails={item}
                      showManageSection={this.props.showManageSection}
                      editCallback={this.props.editCallback}
                      deleteCallback={this.props.deleteCallback}
                      submitCallback={this.props.submitCallback}
                    />
                  })
                  : <EmptyPage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
