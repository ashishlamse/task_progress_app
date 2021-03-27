import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_TASK = "REQUEST_TASK";
export const CREATE_NEW_TASK_SUCCESS_FAILURE = "CREATE_NEW_TASK_SUCCESS_FAILURE";
export const UPDATE_TASK_SUCCESS_FAILURE = "UPDATE_TASK_SUCCESS_FAILURE";
export const DELETE_TASK_SUCCESS_FAILURE = "DELETE_TASK_SUCCESS_FAILURE";
export const ALL_TASKS_SUCCESS_FAILURE = "ALL_TASKS_SUCCESS_FAILURE";
export const SUBMIT_TASK_SUCCESS_FAILURE = "SUBMIT_TASK_SUCCESS_FAILURE";

export function requestTaskLoad() {
    return {
        type: REQUEST_TASK
    };
}

export function createNewTaskSuccessFailure(createNewTaskSuccessFailure) {
    return {
        type: CREATE_NEW_TASK_SUCCESS_FAILURE,
        createNewTaskSuccessFailure
    }
}


export function createNewTask(body) {
    console.log("createNewTask -> body", body)
    return dispatch => {
        dispatch(requestTaskLoad());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "task", body).then(res => {
            dispatch(createNewTaskSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(createNewTaskSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function updateTaskSuccessFailure(updateTaskSuccessFailure) {
    return {
        type: UPDATE_TASK_SUCCESS_FAILURE,
        updateTaskSuccessFailure
    }
}


export function updateTask(body, id) {
    console.log("updateTask -> body", body, id)
    return dispatch => {
        dispatch(requestTaskLoad());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "task/" + id, body).then(res => {
            dispatch(updateTaskSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(updateTaskSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function deleteTaskSuccessFailure(deleteTaskSuccessFailure) {
    return {
        type: DELETE_TASK_SUCCESS_FAILURE,
        deleteTaskSuccessFailure
    }
}


export function deleteTask(id) {
    return dispatch => {
        dispatch(requestTaskLoad());
        return AxiosInstance.delete(GOOGLE_CLOUD_BASE_URL + "task/" + id).then(res => {
            dispatch(deleteTaskSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(deleteTaskSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function submitTaskSuccessFailure(submitTaskSuccessFailure) {
    return {
        type: SUBMIT_TASK_SUCCESS_FAILURE,
        submitTaskSuccessFailure
    }
}


export function submitTask(id) {
    return dispatch => {
        dispatch(requestTaskLoad());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "task/submit/" + id).then(res => {
            dispatch(submitTaskSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(submitTaskSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function getAllTasksSuccessFailure(getAllTasksSuccessFailure) {
    return {
        type: ALL_TASKS_SUCCESS_FAILURE,
        getAllTasksSuccessFailure
    }
}


export function getAllTasks() {
    return dispatch => {
        dispatch(requestTaskLoad());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "task").then(res => {
            dispatch(getAllTasksSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(getAllTasksSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}