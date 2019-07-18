import React, { useState, useEffect } from "react";
import TextInput from "./../common/TextInput";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChangeHandler = e => {
    console.log(e.target);
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  const onSubmitHandler = e => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword
    };
    props.register(userData, props.history);
  };
  return (
    <div className="row p-4">
      <div className="col-md-12">
        <h2>Sign up</h2>
        <form onSubmit={e => onSubmitHandler(e)}>
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="name1"
            name="name"
            label="Name"
            type="text"
            desc="name"
            placeholder="Enter name"
          />
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="email1"
            name="email"
            label="Email address"
            type="email"
            desc="email"
            placeholder="Enter e-mail"
          />
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="password1"
            name="password"
            label="Password"
            type="password"
            desc="password"
            placeholder="Enter password"
          />
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="password2"
            name="confirmPassword"
            label="Confirm password"
            type="password"
            desc="password2"
            placeholder="Confirm your password"
          />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree with the <a href="/register">Terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="mt-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = ({ lang }) => ({ lang });

const mapDispatchToProps = dispatch => ({
  register: (data, history) => dispatch(register(data, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
