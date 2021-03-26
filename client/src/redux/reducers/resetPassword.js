import { REQUEST_RESET_PASSWORD, RESET_PASSWORD_SUCCESS_FAILURE } from "../actions/resetPassword";

const initialState = {
    isFetching: false,
    resetPasswordSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_RESET_PASSWORD:
            return {
                ...state,
                isFetching: true
            };
        case RESET_PASSWORD_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                resetPasswordSuccessFailure: actions.resetPasswordSuccessFailure
            };
        default:
            return state;
    }
};
