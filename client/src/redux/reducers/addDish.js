import {
    REQUEST_REGISTER_DISH,
    REGISTER_DISH_SUCCESS_FAILURE,
    UPDATE_DISH_SUCCESS_FAILURE,
    DISH_DETAIL_SUCCESS_FAILURE,
    DELETE_DISH_SUCCESS_FAILURE
} from "../actions/addDish";

const initialState = {
    isFetching: false,
    registerDishSuccessFailure: undefined,
    updateDishSuccessFailure: undefined,
    dishDetailSuccessFailure: undefined,
    deleteDishSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_REGISTER_DISH:
            return {
                ...state,
                isFetching: true
            };
        case REGISTER_DISH_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                registerDishSuccessFailure: actions.registerDishSuccessFailure
            };
        case UPDATE_DISH_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                updateDishSuccessFailure: actions.updateDishSuccessFailure
            };
        case DISH_DETAIL_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                dishDetailSuccessFailure: actions.dishDetailSuccessFailure
            };
        case DELETE_DISH_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                deleteDishSuccessFailure: actions.deleteDishSuccessFailure
            };
        default:
            return state;
    }
};
