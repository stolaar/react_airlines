import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

function ProtectedRoute(props) {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return <Redirect to="/login" />;
    } else {
      return <Route exact path={props.path} component={props.component} />;
    }
  }
}
export default ProtectedRoute;
