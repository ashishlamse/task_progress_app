import { combineReducers } from "redux";

import register from "../reducers/register";
import signin from "../reducers/signin";
import task from "../reducers/task";


const rootReducer = combineReducers({
    register,
    signin,
    task
});
export default rootReducer;
