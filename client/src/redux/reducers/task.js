import {
    REQUEST_TASK,
    CREATE_NEW_TASK_SUCCESS_FAILURE,
    UPDATE_TASK_SUCCESS_FAILURE,
    DELETE_TASK_SUCCESS_FAILURE,
    ALL_TASKS_SUCCESS_FAILURE,
    SUBMIT_TASK_SUCCESS_FAILURE
} from "../actions/task";

const initialState = {
    isFetching: false,
    createNewTaskSuccessFailure: undefined,
    updateTaskSuccessFailure: undefined,
    deleteTaskSuccessFailure: undefined,
    getAllTasksSuccessFailure: undefined,
    submitTaskSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_TASK:
            return {
                ...state,
                isFetching: true
            };
        case CREATE_NEW_TASK_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                createNewTaskSuccessFailure: actions.createNewTaskSuccessFailure
            };
        case UPDATE_TASK_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                updateTaskSuccessFailure: actions.updateTaskSuccessFailure
            };
        case DELETE_TASK_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                deleteTaskSuccessFailure: actions.deleteTaskSuccessFailure
            };
        case ALL_TASKS_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                getAllTasksSuccessFailure: actions.getAllTasksSuccessFailure
            };
        case SUBMIT_TASK_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                submitTaskSuccessFailure: actions.submitTaskSuccessFailure
            };
        default:
            return state;
    }
};
