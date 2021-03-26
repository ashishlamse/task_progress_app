import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS_FAILURE = "RESET_PASSWORD_SUCCESS_FAILURE";


export function requestResetPassword() {
    return {
        type: REQUEST_RESET_PASSWORD
    };
}

export function resetPasswordSuccessFailure(resetPasswordSuccessFailure) {
    return {
        type: RESET_PASSWORD_SUCCESS_FAILURE,
        resetPasswordSuccessFailure
    }
}


export function resetPassword(body) {
    console.log("resetPassword -> body", body, AxiosInstance.defaults.headers)
    return dispatch => {
        dispatch(requestResetPassword());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "resetPassword", body).then(res => {
            dispatch(resetPasswordSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(resetPasswordSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}
