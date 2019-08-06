import React, { useState, useEffect } from "react";
import TextInput from "./../common/TextInput";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

function Register(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const [confirmedTC, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({ ...props.errors });
  }, [props.errors]);

  const onChangeHandler = e => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const checkedTC = () => {
    setConfirmed(!confirmedTC);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2
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
            error={errors.name}
            placeholder="Enter name"
          />
          <TextInput
            onChange={e => onChangeHandler(e)}
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
          <TextInput
            onChange={e => onChangeHandler(e)}
            id="password2"
            name="password2"
            label="Confirm password"
            type="password"
            desc="password2"
            error={errors.password2}
            placeholder="Confirm your password"
          />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={() => checkedTC()}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree with the <a href="/register">Terms and conditions</a>
            </label>
          </div>
          <button
            disabled={!confirmedTC}
            type="submit"
            className="mt-2 btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = ({ lang, errors }) => ({ lang, errors });

const mapDispatchToProps = dispatch => ({
  register: (data, history) => dispatch(register(data, history))
});

Register.propTypes = {
  lang: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
