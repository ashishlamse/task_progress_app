import {
    REQUEST_USER_SIGNIN,
    SIGNIN_USER_SUCCESS_FAILURE
} from "../actions/signin";

const initialState = {
    isFetching: false,
    signinSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_USER_SIGNIN:
            return {
                ...state,
                isFetching: true
            };
        case SIGNIN_USER_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                signinSuccessFailure: actions.signinSuccessFailure
            };
        default:
            return state;
    }
};
