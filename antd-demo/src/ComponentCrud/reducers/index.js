import login from "./login";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    login: login
})
export default allReducers;