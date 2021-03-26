import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_FORGOT_PASSWORD = "REQUEST_FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS_FAILURE = "FORGOT_PASSWORD_SUCCESS_FAILURE";


export function requestForgotPassword() {
    return {
        type: REQUEST_FORGOT_PASSWORD
    };
}

export function forgotPasswordSuccessFailure(forgotPasswordSuccessFailure) {
    return {
        type: FORGOT_PASSWORD_SUCCESS_FAILURE,
        forgotPasswordSuccessFailure
    }
}


export function forgotPassword(body) {
    console.log("forgotPassword -> body", body)
    return dispatch => {
        dispatch(requestForgotPassword());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "forgotPassword", body).then(res => {
            dispatch(forgotPasswordSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("forgotPassword -> error", error)
            dispatch(forgotPasswordSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}
