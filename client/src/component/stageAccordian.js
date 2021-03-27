// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default class StageToggle extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        };
    }

    toggleState = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <span>
                <span>
                    Stage
                </span>
                <span style={{ float: 'right' }} onClick={this.toggleState}>
                    {
                        this.state.toggle ?
                            <FaChevronDown className="icon-style" />
                            :
                            <FaChevronUp className="icon-style" />
                    }
                </span>
                {
                    this.state.toggle ?
                        <div>
                            {this.props.stage}
                        </div>
                        :
                        null
                }
            </span>
        );
    }
}
