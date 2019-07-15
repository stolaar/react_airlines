import { SET_LANGUAGE } from "./types";

export const changeLanguage = lang => dispatch => {
  dispatch({ type: SET_LANGUAGE, lang });
};
