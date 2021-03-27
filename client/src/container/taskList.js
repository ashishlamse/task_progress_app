// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import TaskPannelCard from "../component/taskPannelCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import ShowSnackBar from "../component/snackBar";
import _ from "lodash";
import Loading from "../component/loading";
import { getAllTasks, deleteTask, submitTask } from '../redux/actions/task'
import { routePathNames } from '../utils/constants'
import DeleteModal from '../component/deleteModal';
import { Modal } from 'bootstrap';
class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            allTasks: [],
            submittedTasks: [],
            isDataLoaded: false,
            selectedTask: {}
        };
    }

    componentDidMount() {
        this.fetchTasks();
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

    fetchTasks = () => {
        this.props
            .dispatch(getAllTasks())
            .then(() => {
                let result = this.props.getAllTasksSuccessFailure;
                if (result && result.isSuccess) {
                    console.log("fetchTasks -> result", result);
                    this.setState({
                        allTasks: result.response.task,
                        submittedTasks: result.response.submitedtask,
                        isDataLoaded: true
                    })
                } else {
                    this.showSnackBarEvent(result.message);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    submitTaskApiCall = (id) => {
        this.props
            .dispatch(submitTask(id))
            .then(() => {
                let result = this.props.submitTaskSuccessFailure;
                if (result && result.isSuccess) {
                    this.showSnackBarEvent(result.response.message, true);
                    this.fetchTasks();
                } else {
                    this.showSnackBarEvent(result.message);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    toggleConfirmation = (id, name) => {
        var myModal = new Modal(document.getElementById('deleteTaskModal'), {
            keyboard: false
        });
        this.setState({ selectedTask: { id, name }, myModal });
        myModal.toggle();
    }

    onCancelDelete = () => {
        this.state.myModal.toggle();
        this.setState({ selectedTask: {}, myModal: '' });
    };

    deleteTaskApiCall = (id) => {
        this.state.myModal.toggle();
        this.setState({ selectedTask: {}, myModal: '' });
        this.props
            .dispatch(deleteTask(id))
            .then(() => {
                let result = this.props.deleteTaskSuccessFailure;
                if (result && result.isSuccess) {
                    this.showSnackBarEvent(result.response.message, true);
                    this.fetchTasks();
                } else {
                    this.showSnackBarEvent(result.message);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    updateTask = (data) => {
        this.props.history.push({
            pathname: routePathNames.UPDATE_TASK,
            state: {
                isUpdate: true,
                data: data
            }
        });
    }

    render() {
        let { isDataLoaded } = this.state;
        return (
            <div className="container-fluid row parent-div center" >
                <div className="col-md-12 col-sm-12 div-center-align-bread">
                    <span className="parent">
                        {"Task List"}
                    </span>
                </div>
                {
                    isDataLoaded ?
                        <div className="row" style={{ marginTop: 25 }}>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <TaskPannelCard
                                    title={"All task"}
                                    data={this.state.allTasks}
                                    showManageSection={true}
                                    editCallback={this.updateTask}
                                    deleteCallback={this.toggleConfirmation}
                                    submitCallback={this.submitTaskApiCall}
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <TaskPannelCard
                                    title={"Submitted task"}
                                    data={this.state.submittedTasks}
                                    showManageSection={false}
                                />
                            </div>
                        </div>
                        : null
                }
                <Loading isFetching={this.props.isFetching} />
                <ShowSnackBar
                    message={this.state.message}
                    toggle={this.state.toggle}
                    handleClose={this.handleSnackBar}
                    snackbarStatus={this.state.snackbarStatus}
                />
                <DeleteModal
                    onConfirm={this.deleteTaskApiCall}
                    onCancelDelete={this.onCancelDelete}
                    id={this.state.selectedTask.id}
                    name={this.state.selectedTask.name}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.task.isFetching,
        getAllTasksSuccessFailure: state.task.getAllTasksSuccessFailure,
        submitTaskSuccessFailure: state.task.submitTaskSuccessFailure,
        deleteTaskSuccessFailure: state.task.deleteTaskSuccessFailure,
    };
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        getAllTasks
    }),
    dispatch,
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TaskList)
);
