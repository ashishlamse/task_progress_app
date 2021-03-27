import { combineReducers } from "redux";

import register from "../reducers/register";
import signin from "../reducers/signin";
import task from "../reducers/task";
import statistics from "../reducers/stats";

const rootReducer = combineReducers({
    register,
    signin,
    task,
    statistics
});
export default rootReducer;
