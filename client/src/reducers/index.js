import lang from "./languageReducer";
import errors from "./errorsReducer";
import { combineReducers } from "redux";
import auth from "./authReducers";
import tabs from "./tabsReducer";

export default combineReducers({ lang, auth, errors, tabs });
