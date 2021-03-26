import {
    REQUEST_LOCATION,
    LOCATION_SUCCESS_FAILURE,
    ALL_LOCATION_SUCCESS_FAILURE,
    UPDATE_LOCATION_SUCCESS_FAILURE,
    LOCATION_DETAIL_SUCCESS_FAILURE,
    DELETE_LOCATION_SUCCESS_FAILURE,
    RESTAURANT_DETAIL_SUCCESS_FAILURE,
    UPDATE_RESTAURANT_SUCCESS_FAILURE
} from "../actions/location";

const initialState = {
    isFetching: false,
    locationSuccessFailure: undefined,
    allLocationSuccessFailure: undefined,
    updateLocationSuccessFailure: undefined,
    locationDetailSuccessFailure: undefined,
    deleteLocationSuccessFailure: undefined,
    restaurantDetailSuccessFailure: undefined,
    updateRestaurantSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_LOCATION:
            return {
                ...state,
                isFetching: true
            };
        case LOCATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                locationSuccessFailure: actions.locationSuccessFailure
            };
        case ALL_LOCATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                allLocationSuccessFailure: actions.allLocationSuccessFailure
            };
        case UPDATE_LOCATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                updateLocationSuccessFailure: actions.updateLocationSuccessFailure
            };
        case LOCATION_DETAIL_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                locationDetailSuccessFailure: actions.locationDetailSuccessFailure
            };
        case DELETE_LOCATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                deleteLocationSuccessFailure: actions.deleteLocationSuccessFailure
            };
        case RESTAURANT_DETAIL_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                restaurantDetailSuccessFailure: actions.restaurantDetailSuccessFailure
            };
        case UPDATE_RESTAURANT_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                updateRestaurantSuccessFailure: actions.updateRestaurantSuccessFailure
            };
        default:
            return state;
    }
};
