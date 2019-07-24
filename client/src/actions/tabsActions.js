import { SET_PANEL } from "./types";

export const setPanel = panel => dispatch => {
  dispatch({ type: SET_PANEL, payload: panel });
};
