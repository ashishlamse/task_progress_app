import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const REGISTER_SUCCESS_FAILURE = "REGISTER_SUCCESS_FAILURE";


export function requestRegister() {
    return {
        type: REQUEST_REGISTER
    };
}

export function registerSuccessFailure(registerSuccessFailure) {
    return {
        type: REGISTER_SUCCESS_FAILURE,
        registerSuccessFailure
    }
}


export function register(body) {
    return dispatch => {
        dispatch(requestRegister());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "users", body).then(res => {
            dispatch(registerSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(registerSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}