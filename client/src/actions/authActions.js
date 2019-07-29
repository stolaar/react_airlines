import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";

export const loginUser = userData => dispatch => {
  const { email, password } = userData;
  console.log(typeof email);
  let queryData = {
    query: `
    query {
      login(email: "${email}", password: "${password}") {
        success
        token
      }
    }
    `
  };
  const options = {
    headers: { "Content-Type": "application/json" }
  };
  fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify(queryData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => console.log(res.json()))
    .catch(e => console.log(e));
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
