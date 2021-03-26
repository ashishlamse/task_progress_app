import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_REGISTER_DISH = "REQUEST_REGISTER_DISH";
export const REGISTER_DISH_SUCCESS_FAILURE = "REGISTER_DISH_SUCCESS_FAILURE";
export const UPDATE_DISH_SUCCESS_FAILURE = "UPDATE_DISH_SUCCESS_FAILURE";
export const DISH_DETAIL_SUCCESS_FAILURE = "DISH_DETAIL_SUCCESS_FAILURE";
export const DELETE_DISH_SUCCESS_FAILURE = "DELETE_DISH_SUCCESS_FAILURE";


export function requestRegisterDish() {
    return {
        type: REQUEST_REGISTER_DISH
    };
}

export function registerDishSuccessFailure(registerDishSuccessFailure) {
    return {
        type: REGISTER_DISH_SUCCESS_FAILURE,
        registerDishSuccessFailure
    }
}


export function addDish(body) {
    console.log("addDish -> body", body)
    console.log("addDish -> body AxiosInstance.defaults.headers", AxiosInstance.defaults.headers)
    return dispatch => {
        dispatch(requestRegisterDish());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "dish", body).then(res => {
            dispatch(registerDishSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("addDish -> error", error)
            dispatch(registerDishSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function updateDishSuccessFailure(updateDishSuccessFailure) {
    return {
        type: UPDATE_DISH_SUCCESS_FAILURE,
        updateDishSuccessFailure
    }
}


export function updateDish(body, id) {
    console.log("addDish -> body", body)
    return dispatch => {
        dispatch(requestRegisterDish());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "dish/" + id, body).then(res => {
            dispatch(updateDishSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(updateDishSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function dishDetailSuccessFailure(dishDetailSuccessFailure) {
    return {
        type: DISH_DETAIL_SUCCESS_FAILURE,
        dishDetailSuccessFailure
    }
}


export function dishDetail(id) {
    return dispatch => {
        dispatch(requestRegisterDish());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "dish/" + id).then(res => {
            dispatch(dishDetailSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(dishDetailSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function deleteDishSuccessFailure(deleteDishSuccessFailure) {
    return {
        type: DELETE_DISH_SUCCESS_FAILURE,
        deleteDishSuccessFailure
    }
}


export function deleteDish(id) {
    return dispatch => {
        dispatch(requestRegisterDish());
        return AxiosInstance.delete(GOOGLE_CLOUD_BASE_URL + "dish/" + id).then(res => {
            dispatch(deleteDishSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(deleteDishSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}