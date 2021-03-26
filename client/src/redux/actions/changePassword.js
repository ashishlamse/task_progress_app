import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_CHANGE_PASSWORD = "REQUEST_CHANGE_PASSWORD";
export const CHANGE_PASSWORD_SUCCESS_FAILURE = "CHANGE_PASSWORD_SUCCESS_FAILURE";


export function requestChangePassword() {
    return {
        type: REQUEST_CHANGE_PASSWORD
    };
}

export function changePasswordSuccessFailure(changePasswordSuccessFailure) {
    return {
        type: CHANGE_PASSWORD_SUCCESS_FAILURE,
        changePasswordSuccessFailure
    }
}


export function changePassword(id, body) {
    console.log("changePassword -> body", body, AxiosInstance.defaults.headers)
    return dispatch => {
        dispatch(requestChangePassword());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "changePassword/" + id, body).then(res => {
            dispatch(changePasswordSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(changePasswordSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}
