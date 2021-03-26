import {
    REQUEST_NOTIFICATION,
    NEARBY_USERS_NOTIFICATION_SUCCESS_FAILURE,
    VIEW_MENU_USERS_NOTIFICATION_SUCCESS_FAILURE
} from "../actions/notification";

const initialState = {
    isFetching: false,
    nearbyUsersNotifcationSuccessFailure: undefined,
    viewMenuUsersNotifcationSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_NOTIFICATION:
            return {
                ...state,
                isFetching: true
            };
        case NEARBY_USERS_NOTIFICATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                nearbyUsersNotifcationSuccessFailure: actions.nearbyUsersNotifcationSuccessFailure
            };
        case VIEW_MENU_USERS_NOTIFICATION_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                viewMenuUsersNotifcationSuccessFailure: actions.viewMenuUsersNotifcationSuccessFailure
            };
        default:
            return state;
    }
};
