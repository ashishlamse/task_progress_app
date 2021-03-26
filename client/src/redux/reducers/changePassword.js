import { REQUEST_CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS_FAILURE } from "../actions/changePassword";

const initialState = {
    isFetching: false,
    changePasswordSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_CHANGE_PASSWORD:
            return {
                ...state,
                isFetching: true
            };
        case CHANGE_PASSWORD_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                changePasswordSuccessFailure: actions.changePasswordSuccessFailure
            };
        default:
            return state;
    }
};
