import AxiosInstance from "../../api/axios";
import { GOOGLE_CLOUD_BASE_URL } from "../../api/axios"

export const REQUEST_CATEGORY = "REQUEST_CATEGORY";
export const CATEGORY_SUCCESS_FAILURE = "CATEGORY_SUCCESS_FAILURE";
export const COMMON_CATEGORY_SUCCESS_FAILURE = "COMMON_CATEGORY_SUCCESS_FAILURE";
export const YOUR_CATEGORY_SUCCESS_FAILURE = "YOUR_CATEGORY_SUCCESS_FAILURE";
export const SINGLE_CATEGORY_SUCCESS_FAILURE = "SINGLE_CATEGORY_SUCCESS_FAILURE";


export function requestCategory() {
    return {
        type: REQUEST_CATEGORY
    };
}

export function categorySuccessFailure(categorySuccessFailure) {
    return {
        type: CATEGORY_SUCCESS_FAILURE,
        categorySuccessFailure
    }
}


export function addCategory(body) {
    console.log("addCategory -> body", body)
    return dispatch => {
        dispatch(requestCategory());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "selectedCategories", body).then(res => {
            dispatch(categorySuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(categorySuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function commonCategorySuccessFailure(commonCategorySuccessFailure) {
    return {
        type: COMMON_CATEGORY_SUCCESS_FAILURE,
        commonCategorySuccessFailure
    }
}


export function getCommonCategories() {
    return dispatch => {
        dispatch(requestCategory());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "commonCategories").then(res => {
            dispatch(commonCategorySuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(commonCategorySuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}

export function yourCategorySuccessFailure(yourCategorySuccessFailure) {
    return {
        type: YOUR_CATEGORY_SUCCESS_FAILURE,
        yourCategorySuccessFailure
    }
}


export function getSelectedCategories(id) {
    return dispatch => {
        dispatch(requestCategory());
        return AxiosInstance.get(GOOGLE_CLOUD_BASE_URL + "categories/" + id).then(res => {
            dispatch(yourCategorySuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            console.log("getSelectedCategories -> error", error)
            dispatch(yourCategorySuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}


export function singleCategorySuccessFailure(singleCategorySuccessFailure) {
    return {
        type: SINGLE_CATEGORY_SUCCESS_FAILURE,
        singleCategorySuccessFailure
    }
}


export function addSingleCategory(body) {
    return dispatch => {
        dispatch(requestCategory());
        return AxiosInstance.post(GOOGLE_CLOUD_BASE_URL + "singleCategory", body).then(res => {
            dispatch(singleCategorySuccessFailure({ isSuccess: true, response: res.data }))
        }).catch(error => {
            dispatch(singleCategorySuccessFailure({ isSuccess: false, message: error.response.data.message }))
        })
    }
}