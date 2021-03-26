import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_LOCATION = "REQUEST_LOCATION";
export const LOCATION_SUCCESS_FAILURE = "LOCATION_SUCCESS_FAILURE";
export const ALL_LOCATION_SUCCESS_FAILURE = "ALL_LOCATION_SUCCESS_FAILURE";
export const UPDATE_LOCATION_SUCCESS_FAILURE = "UPDATE_LOCATION_SUCCESS_FAILURE";
export const LOCATION_DETAIL_SUCCESS_FAILURE = "LOCATION_DETAIL_SUCCESS_FAILURE";
export const DELETE_LOCATION_SUCCESS_FAILURE = "DELETE_LOCATION_SUCCESS_FAILURE";
export const RESTAURANT_DETAIL_SUCCESS_FAILURE = "RESTAURANT_DETAIL_SUCCESS_FAILURE";
export const UPDATE_RESTAURANT_SUCCESS_FAILURE = "UPDATE_RESTAURANT_SUCCESS_FAILURE";

export function requestLocation() {
    return {
        type: REQUEST_LOCATION
    };
}

export function locationSuccessFailure(locationSuccessFailure) {
    return {
        type: LOCATION_SUCCESS_FAILURE,
        locationSuccessFailure
    }
}


export function addLocation(body) {
    console.log('body', body, AxiosInstance.defaults.headers)
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "addLocation", body).then(res => {
            dispatch(locationSuccessFailure({ isSuccess: true, response: res.data }))
            console.log("addLocation -> res", res)
        }).catch(error => {
            console.log("addLocation -> error", error)
            dispatch(locationSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function allLocationSuccessFailure(allLocationSuccessFailure) {
    return {
        type: ALL_LOCATION_SUCCESS_FAILURE,
        allLocationSuccessFailure
    }
}


export function getAllLocations(id) {
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "locations/" + id).then(res => {
            dispatch(allLocationSuccessFailure({ isSuccess: true, response: res.data }))
            console.log("addLocation -> res", res)
        }).catch(error => {
            console.log("addLocation -> error", error)
            dispatch(allLocationSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function updateLocationSuccessFailure(updateLocationSuccessFailure) {
    return {
        type: UPDATE_LOCATION_SUCCESS_FAILURE,
        updateLocationSuccessFailure
    }
}


export function updateLocation(body, id) {
    console.log("updateLocation -> body", body, GOOGLE_CLOUD_BASE_URL + "location/" + body.restaurant_id)
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "location/" + id, body).then(res => {
            dispatch(updateLocationSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("updateLocation -> error", error)
            dispatch(updateLocationSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function locationDetailSuccessFailure(locationDetailSuccessFailure) {
    return {
        type: LOCATION_DETAIL_SUCCESS_FAILURE,
        locationDetailSuccessFailure
    }
}


export function locationDetail(id) {
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "location/" + id).then(res => {
            dispatch(locationDetailSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(locationDetailSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function deleteLocationSuccessFailure(deleteLocationSuccessFailure) {
    return {
        type: DELETE_LOCATION_SUCCESS_FAILURE,
        deleteLocationSuccessFailure
    }
}


export function deleteLocation(id) {
    console.log("deleteLocation -> id", id)
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.delete(GOOGLE_CLOUD_BASE_URL + "location/" + id).then(res => {
            dispatch(deleteLocationSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(deleteLocationSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function restaurantDetailSuccessFailure(restaurantDetailSuccessFailure) {
    return {
        type: RESTAURANT_DETAIL_SUCCESS_FAILURE,
        restaurantDetailSuccessFailure
    }
}


export function restaurantDetail(id) {
    console.log("restaurantDetail -> id", id)
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "profile/" + id).then(res => {
            dispatch(restaurantDetailSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(restaurantDetailSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function updateRestaurantSuccessFailure(updateRestaurantSuccessFailure) {
    return {
        type: UPDATE_RESTAURANT_SUCCESS_FAILURE,
        updateRestaurantSuccessFailure
    }
}


export function updateRestaurant(body, id) {
    return dispatch => {
        dispatch(requestLocation());
        return AxiosInstance.put(GOOGLE_CLOUD_BASE_URL + "profile/" + id, body).then(res => {
            dispatch(updateRestaurantSuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("updateLocation -> error", error)
            dispatch(updateRestaurantSuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}