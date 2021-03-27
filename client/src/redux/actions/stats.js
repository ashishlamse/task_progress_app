import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_STATS = "REQUEST_STATS";
export const STATS_SUCCESS_FAILURE = "STATS_SUCCESS_FAILURE";

export function requestStats() {
    return {
        type: REQUEST_STATS
    };
}

export function statsSuccessFailure(statsSuccessFailure) {
    return {
        type: STATS_SUCCESS_FAILURE,
        statsSuccessFailure
    }
}


export function getStatistics() {
    return dispatch => {
        dispatch(requestStats());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "task/chart").then(res => {
            dispatch(statsSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(statsSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}