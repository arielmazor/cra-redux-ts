import { combineReducers } from "redux";
import StudentsReducer from "./Students";

export default combineReducers({students: StudentsReducer});