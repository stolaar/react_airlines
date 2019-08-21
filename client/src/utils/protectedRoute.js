import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import setAuthToken from "./setAuthToken";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

const ProtectedRoute = ({
  component: Component,
  auth,
  logoutUser,
  history,
  ...rest
}) => {
  useEffect(() => {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);
      if (decoded.exp < Date.now() / 1000) {
        logoutUser(null);
        setAuthToken(null);
        history.push("/login");
      }
    }
  });
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProtectedRoute));
