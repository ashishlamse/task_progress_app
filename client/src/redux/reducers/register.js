import {
    REQUEST_REGISTER,
    REGISTER_SUCCESS_FAILURE
} from "../actions/register";

const initialState = {
    isFetching: false,
    registerSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_REGISTER:
            return {
                ...state,
                isFetching: true
            };
        case REGISTER_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                registerSuccessFailure: actions.registerSuccessFailure
            };
        default:
            return state;
    }
};
