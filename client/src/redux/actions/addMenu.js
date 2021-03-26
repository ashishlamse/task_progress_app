import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_ADD_MENU = "REQUEST_ADD_MENU";
export const ADD_MENU_SUCCESS_FAILURE = "ADD_MENU_SUCCESS_FAILURE";
export const ALL_MENU_SUCCESS_FAILURE = "ALL_MENU_SUCCESS_FAILURE";
export const UPDATE_MENU_SUCCESS_FAILURE = "UPDATE_MENU_SUCCESS_FAILURE";
export const MENU_DETAIL_SUCCESS_FAILURE = "MENU_DETAIL_SUCCESS_FAILURE";
export const DELETE_MENU_SUCCESS_FAILURE = "DELETE_MENU_SUCCESS_FAILURE";
export const PUBLISH_STATUS_SUCCESS_FAILURE = "PUBLISH_STATUS_SUCCESS_FAILURE";


export function requestAddMenu() {
    return {
        type: REQUEST_ADD_MENU
    };
}

export function addMenuSuccessFailure(addMenuSuccessFailure) {
    return {
        type: ADD_MENU_SUCCESS_FAILURE,
        addMenuSuccessFailure
    }
}


export function addMenu(body) {
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "menu", body).then(res => {
            dispatch(addMenuSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(addMenuSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function allMenuSuccessFailure(allMenuSuccessFailure) {
    return {
        type: ALL_MENU_SUCCESS_FAILURE,
        allMenuSuccessFailure
    }
}


export function getAllMenu(id) {
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "menus/" + id).then(res => {
            dispatch(allMenuSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(allMenuSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function updateMenuSuccessFailure(updateMenuSuccessFailure) {
    return {
        type: UPDATE_MENU_SUCCESS_FAILURE,
        updateMenuSuccessFailure
    }
}


export function updateMenu(body, id) {
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "menu/" + id, body).then(res => {
            dispatch(updateMenuSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(updateMenuSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function menuDetailSuccessFailure(menuDetailSuccessFailure) {
    return {
        type: MENU_DETAIL_SUCCESS_FAILURE,
        menuDetailSuccessFailure
    }
}


export function menuDetail(id) {
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "menu/" + id).then(res => {
            dispatch(menuDetailSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(menuDetailSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function deleteMenuSuccessFailure(deleteMenuSuccessFailure) {
    return {
        type: DELETE_MENU_SUCCESS_FAILURE,
        deleteMenuSuccessFailure
    }
}


export function deleteMenu(id) {
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.delete(GOOGLE_CLOUD_BASE_URL + "menu/" + id).then(res => {
            dispatch(deleteMenuSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(deleteMenuSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function publishStatusSuccessFailure(publishStatusSuccessFailure) {
    return {
        type: PUBLISH_STATUS_SUCCESS_FAILURE,
        publishStatusSuccessFailure
    }
}


export function changePublishStatus(id, body) {
    console.log("changePublishStatus -> body", body)
    return dispatch => {
        dispatch(requestAddMenu());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "menu/status/" + id, body).then(res => {
            dispatch(publishStatusSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(publishStatusSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}