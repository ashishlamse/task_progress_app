import { CHANGE_EMAIL_SUCCESS_FAILURE, REQUEST_CHANGE_EMAIL } from "../actions/changeEmail";

const initialState = {
    isFetching: false,
    changeEmailSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_CHANGE_EMAIL:
            return {
                ...state,
                isFetching: true
            };
        case CHANGE_EMAIL_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                changeEmailSuccessFailure: actions.changeEmailSuccessFailure
            };
        default:
            return state;
    }
};