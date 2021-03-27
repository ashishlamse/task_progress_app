import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import ShowSnackBar from "../component/snackBar";
import _ from "lodash";
import Loading from "../component/loading";
import DatePicker from "react-datepicker";
import SelectDropdown from '../component/selectDropdown'
import ImageDropZone from '../component/imageDropZone';
import "../css/createTask.css"
import "react-datepicker/dist/react-datepicker.css";
import { alert } from '../utils/constants'

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            taskDescription: "",
            priorityList: [
                { value: "Low", label: "Low" },
                { value: "Medium", label: "Medium" },
                { value: "High", label: "High" },
            ],
            stageList: [
                { value: "Pending", label: "Pending" },
                { value: "In-progress", label: "In-progress" },
                { value: "Completed", label: "Completed" },
                { value: "Verified", label: "Verified" }
            ],
            selectedPriority: '',
            selectedStage: '',
            imageData: [{}],
            deadlineDate: ''
        };
    }

    componentDidMount() {
    }

    handleChange = (val, name) => {
        this.setState({ [name]: val }, () => {
            console.log("handleChange ", this.state);
        });
    };

    renderDishTextFeild = (name, stateName) => {
        return (
            <div className="form-group row">
                <label className="col-md-3 col-form-label col-form-label-sm label-style">
                    {name}
                </label>
                <div className="col-md-6">
                    <input
                        onChange={(e) => this.handleChange(e.target.value, stateName)}
                        type={"text"}
                        className="form-control form-control-sm"
                        placeholder=""
                        value={this.state[stateName]}
                        placeholder={''}
                    />
                </div>
            </div>
        );
    }

    renderDescription = (name, stateName) => {
        return (
            <div className="form-group row">
                <label className="col-md-3 col-form-label col-form-label-sm label-style">
                    {name}
                </label>
                <div className="col-md-6">
                    <textarea
                        className="form-control"
                        rows="4"
                        onChange={(e) => this.handleChange(e.target.value, stateName)}
                        value={this.state[stateName]}
                    ></textarea>
                </div>
            </div>
        );
    };

    handleStartDateChange = date => {
        console.log("start date", date)
        this.setState({
            deadlineDate: date
        });
    };

    setSelectedData = (type, data) => {
        // debugger
        console.log("Menu -> setSelectedData -> type, data", type, data)
        this.setState(
            {
                [type]: data,
            },
            () => {
                console.log("setSelectedData", this.state);
            }
        );
    };

    renderMenuType = (title, dataArray, stateName) => {
        return (
            <div className="form-group row ">
                <label className="col-md-3 col-form-label col-form-label-sm label-style">
                    {title}
                </label>
                <div className="col-md-4">
                    <SelectDropdown
                        title={"Select" + " " + title}
                        data={dataArray}
                        selectedDataCallback={this.setSelectedData}
                        stateType={stateName}
                        selectedData={this.state[stateName]}
                        closeMenuOnSelect={true}
                    />
                </div>
            </div>
        );
    };

    syncImageData = (data) => {
        if (data && data.length) {
            this.setState({
                imageData: data
            })
        } else {
            this.setState({
                imageData: [{}]
            })
        }
    };

    renderImageDropZone = () => {
        return (
            <div className="form-group row ">
                <label className="col-md-3 col-form-label col-form-label-sm label-style">
                    {"Document Upload:"}
                </label>
                <div className="col-md-6">
                    <ImageDropZone
                        placeHolderText={
                            "Drag 'n' drop single image file here, or click here to select the file."
                        }
                        height={"200px"}
                        width={"100%"}
                        imageData={this.state.imageData}
                        syncImageDataCallback={this.syncImageData}
                    />
                </div>
            </div>
        );
    };

    checkEmpty = () => {
        let { taskName, taskDescription, selectedPriority, selectedStage, deadlineDate } = this.state;
        if (
            taskName === "" ||
            taskDescription === "" ||
            selectedPriority === "" ||
            selectedStage === "" ||
            deadlineDate === ""
        ) {
            return false;
        } else {
            return true;
        }
    };

    submitTask = () => {
        if (this.checkEmpty()) {
        } else {
            this.showSnackBarEvent(alert.mandatoryFields);
        }
    }

    handleSnackBar = () => {
        this.setState({
            toggle: false,
        });
    };

    showSnackBarEvent = (msg, isSuccess = false) => {
        this.setState({
            toggle: true,
            message: msg,
            snackbarStatus: isSuccess,
        });
    };

    renderDeadline = () => {
        const CustomInput = ({ value, onClick }) => (
            <div className="input-group mb-3" onClick={onClick}>
                <input type="text" value={value} className="form-control form-control-sm" placeholder="" aria-describedby="basic-addon2" style={{ pointerEvents: 'none' }} />
                <div className="input-group-append" style={{
                    borderRadius: "0 !important"
                }}>
                </div >
            </div >
        );
        return (
            <div className="form-group row">
                <label className="col-md-3 col-form-label col-form-label-sm label-style">
                    {"Deadline:"}
                </label>
                <div className="col-md-4">
                    <DatePicker
                        customInput={<CustomInput />}
                        selected={this.state.deadlineDate}
                        onChange={this.handleStartDateChange}
                        className="form-control form-control-sm"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        showYearDropdown
                        yearDropdownItemNumber={20}
                        scrollableYearDropdown
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                    />
                </div>
            </div>
        )
    }

    render() {

        return (
            <>
                <div className="container-fluid row parent-div center" >
                    <div className="col-md-12 col-sm-12 div-center-align-bread">
                        <span className="parent">
                            {"Create Task"}
                        </span>
                    </div>
                    <div className="col-md-12">
                        <form className="margin-top-div">
                            <div className="row">
                                <div className={"col-md-12 col-sm-12"}>
                                    {this.renderDishTextFeild(
                                        "Task Name:",
                                        "taskName"
                                    )}
                                    {this.renderDescription(
                                        "Task Description:",
                                        "taskDescription"
                                    )}
                                    {this.renderMenuType('Priority', this.state.priorityList, 'selectedPriority')}
                                    {this.renderMenuType('Stage', this.state.stageList, 'selectedStage')}
                                    {this.renderDeadline()}
                                    {this.renderImageDropZone()}
                                    <div className="submit-btn">
                                        <button onClick={this.submitTask} type="button" class="col-md-3 btn btn-primary btn-block submit-btn-style">Create Task</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Loading isFetching={this.props.isFetching} />
                    <ShowSnackBar
                        message={this.state.message}
                        toggle={this.state.toggle}
                        handleClose={this.handleSnackBar}
                        snackbarStatus={this.state.snackbarStatus}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({

    }),
    dispatch,
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CreateTask)
);
