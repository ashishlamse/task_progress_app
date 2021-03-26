import {
    REQUEST_FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS_FAILURE
} from "../actions/forgotPassword";

const initialState = {
    isFetching: false,
    forgotPasswordSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_FORGOT_PASSWORD:
            return {
                ...state,
                isFetching: true
            };
        case FORGOT_PASSWORD_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                forgotPasswordSuccessFailure: actions.forgotPasswordSuccessFailure
            };
        default:
            return state;
    }
};
