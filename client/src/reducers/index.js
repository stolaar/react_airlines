import lang from "./languageReducer";
import { combineReducers } from "redux";
import auth from "./authReducers";

export default combineReducers({ lang, auth });
