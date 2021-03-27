import { combineReducers } from "redux";

import getRestaurentTypes from "../reducers/getRestaurentTypes";
import register from "../reducers/register";
import signin from "../reducers/signin";
import forgotPassword from "../reducers/forgotPassword";
import resetPassword from "../reducers/resetPassword";
import addLocation from "../reducers/location";
import addDish from "../reducers/addDish"
import addCategory from "../reducers/addCategory"
import addMenu from "../reducers/addMenu"
import changePassword from "../reducers/changePassword"
import changeEmail from '../reducers/changeEmail'
import notification from '../reducers/notification'

const rootReducer = combineReducers({
    getRestaurentTypes,
    register,
    signin,
    forgotPassword,
    resetPassword,
    addLocation,
    addDish,
    addCategory,
    addMenu,
    changePassword,
    changeEmail,
    notification
});
export default rootReducer;
