import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onLogin();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 mx-auto border p-4 text-center">
          <form noValidate onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div className="form-group">
              <label htmlFor="login" hidden>
                Login
              </label>
              <input
                type="text"
                className="form-control mt-3"
                name="login"
                placeholder="Enter login"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" hidden>
                Password
              </label>
              <input
                type="password"
                className="form-control mt-3"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block mx-auto mt-3"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
