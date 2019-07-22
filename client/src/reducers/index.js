import lang from "./languageReducer";
import errors from "./errorsReducer";
import { combineReducers } from "redux";
import auth from "./authReducers";

export default combineReducers({ lang, auth, errors });
