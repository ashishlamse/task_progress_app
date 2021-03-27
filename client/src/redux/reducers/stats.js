import {
    REQUEST_STATS,
    STATS_SUCCESS_FAILURE
} from "../actions/stats";

const initialState = {
    isFetching: false,
    statsSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_STATS:
            return {
                ...state,
                isFetching: true
            };
        case STATS_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                statsSuccessFailure: actions.statsSuccessFailure
            };
        default:
            return state;
    }
};
