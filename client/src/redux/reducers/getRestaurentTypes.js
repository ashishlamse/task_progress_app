import {
    REQUEST_RESTAURANT_TYPES,
    RESTAURANT_TYPES_SUCCESS_FAILURE,
    CATEGORIES_TYPES_SUCCESS_FAILURE,
    CROSS_SELL_TYPES_SUCCESS_FAILURE,
    MENU_TYPES_SUCCESS_FAILURE,
    POS_TYPES_SUCCESS_FAILURE
} from "../actions/getRestaurentTypes";

const initialState = {
    isFetching: false,
    restaurantTypeSuccessFailure: undefined,
    categoriesSuccessFailure: undefined,
    crossSellSuccessFailure: undefined,
    menuTypeSuccessFailure: undefined,
    posTypeSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_RESTAURANT_TYPES:
            return {
                ...state,
                isFetching: true
            };
        case RESTAURANT_TYPES_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                restaurantTypeSuccessFailure: actions.restaurantTypeSuccessFailure
            };
        case CATEGORIES_TYPES_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                categoriesSuccessFailure: actions.categoriesSuccessFailure
            };
        case CROSS_SELL_TYPES_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                crossSellSuccessFailure: actions.crossSellSuccessFailure
            };
        case MENU_TYPES_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                menuTypeSuccessFailure: actions.menuTypeSuccessFailure
            };
        case POS_TYPES_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                posTypeSuccessFailure: actions.posTypeSuccessFailure
            };
        default:
            return state;
    }
};
