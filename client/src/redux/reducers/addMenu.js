import {
    REQUEST_ADD_MENU,
    ADD_MENU_SUCCESS_FAILURE,
    ALL_MENU_SUCCESS_FAILURE,
    UPDATE_MENU_SUCCESS_FAILURE,
    MENU_DETAIL_SUCCESS_FAILURE,
    DELETE_MENU_SUCCESS_FAILURE,
    PUBLISH_STATUS_SUCCESS_FAILURE
} from "../actions/addMenu";

const initialState = {
    isFetching: false,
    addMenuSuccessFailure: undefined,
    allMenuSuccessFailure: undefined,
    updateMenuSuccessFailure: undefined,
    menuDetailSuccessFailure: undefined,
    deleteMenuSuccessFailure: undefined,
    publishStatusSuccessFailure: undefined
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case REQUEST_ADD_MENU:
            return {
                ...state,
                isFetching: true
            };
        case ADD_MENU_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                addMenuSuccessFailure: actions.addMenuSuccessFailure
            };
        case ALL_MENU_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                allMenuSuccessFailure: actions.allMenuSuccessFailure
            };
        case UPDATE_MENU_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                updateMenuSuccessFailure: actions.updateMenuSuccessFailure
            };
        case MENU_DETAIL_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                menuDetailSuccessFailure: actions.menuDetailSuccessFailure
            };
        case DELETE_MENU_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                deleteMenuSuccessFailure: actions.deleteMenuSuccessFailure
            };
        case PUBLISH_STATUS_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                publishStatusSuccessFailure: actions.publishStatusSuccessFailure
            };
        default:
            return state;
    }
};
