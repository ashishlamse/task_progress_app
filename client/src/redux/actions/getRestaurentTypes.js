import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios";

export const REQUEST_RESTAURANT_TYPES = "REQUEST_RESTAURANT_TYPES";
export const RESTAURANT_TYPES_SUCCESS_FAILURE = "RESTAURANT_TYPES_SUCCESS_FAILURE";
export const CATEGORIES_TYPES_SUCCESS_FAILURE = "CATEGORIES_TYPES_SUCCESS_FAILURE";
export const CROSS_SELL_TYPES_SUCCESS_FAILURE = "CROSS_SELL_TYPES_SUCCESS_FAILURE";
export const MENU_TYPES_SUCCESS_FAILURE = "MENU_TYPES_SUCCESS_FAILURE";
export const POS_TYPES_SUCCESS_FAILURE = "POS_TYPES_SUCCESS_FAILURE";


export function requestRestaurantType() {
    return {
        type: REQUEST_RESTAURANT_TYPES
    };
}

export function restaurantTypeSuccessFailure(restaurantTypeSuccessFailure) {
    return {
        type: RESTAURANT_TYPES_SUCCESS_FAILURE,
        restaurantTypeSuccessFailure
    };
}

export function getRestaurentTypes() {
    return dispatch => {
        dispatch(requestRestaurantType());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "getRestaurentTypes")
            .then(res => {
                dispatch(
                    restaurantTypeSuccessFailure({
                        isSuccess: true,
                        response: res.data
                    })
                );
            })
            .catch(error => {
                dispatch(
                    restaurantTypeSuccessFailure({
                        isSuccess: false,
                        message: error.response.data.message
                    })
                );
            });
    };
}


export function categoriesSuccessFailure(categoriesSuccessFailure) {
    return {
        type: CATEGORIES_TYPES_SUCCESS_FAILURE,
        categoriesSuccessFailure
    };
}

export function getCategoriesTypes() {
    return dispatch => {
        dispatch(requestRestaurantType());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "getCategories")
            .then(res => {
                dispatch(
                    categoriesSuccessFailure({
                        isSuccess: true,
                        response: res.data
                    })
                );
            })
            .catch(error => {
                dispatch(
                    categoriesSuccessFailure({
                        isSuccess: false,
                        message: error.response.data.message
                    })
                );
            });
    };
}



export function crossSellSuccessFailure(crossSellSuccessFailure) {
    return {
        type: CROSS_SELL_TYPES_SUCCESS_FAILURE,
        crossSellSuccessFailure
    };
}

export function getCrossSell(id) {
    return dispatch => {
        dispatch(requestRestaurantType());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "dishes/" + id)
            .then(res => {
                dispatch(
                    crossSellSuccessFailure({
                        isSuccess: true,
                        response: res.data
                    })
                );
            })
            .catch(error => {
                dispatch(
                    crossSellSuccessFailure({
                        isSuccess: false,
                        message: error.response.data.message
                    })
                );
            });
    };
}


export function menuTypeSuccessFailure(menuTypeSuccessFailure) {
    return {
        type: MENU_TYPES_SUCCESS_FAILURE,
        menuTypeSuccessFailure
    };
}

export function getMenuType() {
    return dispatch => {
        dispatch(requestRestaurantType());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "getTypesOfMenu")
            .then(res => {
                dispatch(
                    menuTypeSuccessFailure({
                        isSuccess: true,
                        response: res.data
                    })
                );
            })
            .catch(error => {
                dispatch(
                    menuTypeSuccessFailure({
                        isSuccess: false,
                        message: error.response.data.message
                    })
                );
            });
    };
}



export function posTypeSuccessFailure(posTypeSuccessFailure) {
    return {
        type: POS_TYPES_SUCCESS_FAILURE,
        posTypeSuccessFailure
    };
}

export function getPosTypes() {
    return dispatch => {
        dispatch(requestRestaurantType());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "posSystem")
            .then(res => {
                dispatch(
                    posTypeSuccessFailure({
                        isSuccess: true,
                        response: res.data
                    })
                );
            })
            .catch(error => {
                dispatch(
                    posTypeSuccessFailure({
                        isSuccess: false,
                        message: error.response.data.message
                    })
                );
            });
    };
}
