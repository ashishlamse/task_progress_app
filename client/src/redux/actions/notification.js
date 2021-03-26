import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_NOTIFICATION = "REQUEST_NOTIFICATION";
export const NEARBY_USERS_NOTIFICATION_SUCCESS_FAILURE = "NEARBY_USERS_NOTIFICATION_SUCCESS_FAILURE";
export const VIEW_MENU_USERS_NOTIFICATION_SUCCESS_FAILURE = "VIEW_MENU_USERS_NOTIFICATION_SUCCESS_FAILURE";

export function requestNotifcation() {
    return {
        type: REQUEST_NOTIFICATION
    };
}

export function nearbyUsersNotifcationSuccessFailure(nearbyUsersNotifcationSuccessFailure) {
    return {
        type: NEARBY_USERS_NOTIFICATION_SUCCESS_FAILURE,
        nearbyUsersNotifcationSuccessFailure
    }
}


export function nearbyUsersNotification(body) {
    return dispatch => {
        dispatch(requestNotifcation());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "api/sceduleNotification", body).then(res => {
            dispatch(nearbyUsersNotifcationSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("returnAxiosInstance.post ~ error", error.response)
            dispatch(nearbyUsersNotifcationSuccessFailure({ isSuccess: false, message: error.response.data }))
        })
    }
}


export function viewMenuUsersNotifcationSuccessFailure(viewMenuUsersNotifcationSuccessFailure) {
    return {
        type: VIEW_MENU_USERS_NOTIFICATION_SUCCESS_FAILURE,
        viewMenuUsersNotifcationSuccessFailure
    }
}


export function viewMenuUsersNotification(body) {
    return dispatch => {
        dispatch(requestNotifcation());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "api/sendToViewMenusAudiences", body).then(res => {
            dispatch(viewMenuUsersNotifcationSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(viewMenuUsersNotifcationSuccessFailure({ isSuccess: false, message: error.response.data }))
        })
    }
}

