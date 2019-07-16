import React from "react";

function Register(params) {
  return (
    <div className="row p-4">
      <div className="col-md-12">
        <h2>Sign up</h2>
        <form>
          <div classNameName="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
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

export default Register;
