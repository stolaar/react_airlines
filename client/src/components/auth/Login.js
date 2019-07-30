import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import TextInput from "./../common/TextInput";
import PropTypes from "prop-types";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    props.auth.isAuthenticated && props.history.push("/");
  }, [props.auth, props.history]);
  useEffect(() => {
    setErrors({ ...props.errors });
  }, [props.errors]);
  const onChangeHandler = e => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    const userData = {
      email: state.email,
      password: state.password
    };
    props.loginUser(userData);
    e.preventDefault();
  };
  return (
    <div className="row p-4">
      <div className="col-md-12">
        <h2>Login</h2>
        <form onSubmit={e => onSubmit(e)}>
          <TextInput
            onChange={e => onChangeHandler(e)}
            value={state.email}
            id="email1"
            name="email"
            label="Email address"
            type="email"
            desc="email"
            error={errors.email}
            placeholder="Enter e-mail"
          />
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="password1"
            name="password"
            label="Password"
            type="password"
            desc="password"
            error={errors.password}
            placeholder="Enter password"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth, errors }) => ({
  auth,
  errors
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
