import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import axios from "axios";

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(result => {
      const { token } = result.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
        type: GET_ERRORS,
        payload: { ...err.response.data }
      });
    });
};

export const register = (newData, history) => dispatch => {
  axios
    .post("/api/users/register", newData)
    .then(result => {
      result.status === 200 && history.push("/login");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: { ...err.response.data }
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/");
};
