import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";

export const loginUser = userData => dispatch => {
  const { email, password } = userData;
  let queryData = {
    query: `
    query {
      login(email: "${email}", password: "${password}") {
        email
    }
    `
  };
  const options = {
    headers: { "Content-Type": "application/json" }
  };
  axios
    .post("/graphql", queryData, options)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  /* axios
    .post("/api/users/login", userData)
    .then(res => {
      console.log(res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({ type: GET_ERRORS, payload: { ...err.response.data } })
    ); */
};

export const register = (newData, history) => dispatch => {
  axios
    .post("/api/users/register", newData)
    .then(res => history.push("/login"))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
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
