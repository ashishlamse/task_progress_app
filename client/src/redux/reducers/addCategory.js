import {
    REQUEST_CATEGORY,
    CATEGORY_SUCCESS_FAILURE,
    COMMON_CATEGORY_SUCCESS_FAILURE,
    YOUR_CATEGORY_SUCCESS_FAILURE,
    SINGLE_CATEGORY_SUCCESS_FAILURE
} from "../actions/addCategory";

const initialState = {
    isFetching: false,
    categorySuccessFailure: undefined,
    commonCategorySuccessFailure: undefined,
    yourCategorySuccessFailure: undefined,
    singleCategorySuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_CATEGORY:
            return {
                ...state,
                isFetching: true
            };
        case CATEGORY_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                categorySuccessFailure: actions.categorySuccessFailure
            };
        case COMMON_CATEGORY_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                commonCategorySuccessFailure: actions.commonCategorySuccessFailure
            };
        case YOUR_CATEGORY_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                yourCategorySuccessFailure: actions.yourCategorySuccessFailure
            };
        case SINGLE_CATEGORY_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                singleCategorySuccessFailure: actions.singleCategorySuccessFailure
            };
        default:
            return state;
    }
};
