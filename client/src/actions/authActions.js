// import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import { loginData, registerData } from "../helpers/queryData";

export const loginUser = userData => async dispatch => {
  try {
    const result = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(loginData(userData)),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resData = await result.json();
    console.log(resData);
    if (resData.data.login.data) {
      const { token } = resData.data.login.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: { ...resData.data.login.errors }
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const register = (newData, history) => async dispatch => {
  try {
    const result = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(registerData(newData)),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const resData = await result.json();
    console.log(resData.data);
    if (resData.data.register.success) {
      history.push("/login");
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: { ...resData.data.register.errors }
      });
    }
  } catch (e) {
    console.log(e);
  }
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
