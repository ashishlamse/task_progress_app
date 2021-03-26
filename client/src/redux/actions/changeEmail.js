import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_CHANGE_EMAIL = "REQUEST_CHANGE_EMAIL";
export const CHANGE_EMAIL_SUCCESS_FAILURE = "CHANGE_EMAIL_SUCCESS_FAILURE";


export function requestChangeEmail() {
    return {
        type: REQUEST_CHANGE_EMAIL
    };
}

export function changeEmailSuccessFailure(changeEmailSuccessFailure) {
    return {
        type: CHANGE_EMAIL_SUCCESS_FAILURE,
        changeEmailSuccessFailure
    }
}


export function changeEmail(id, body) {
    return dispatch => {
        dispatch(requestChangeEmail());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "changeEmail/" + id, body).then(res => {
            dispatch(changeEmailSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(changeEmailSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}