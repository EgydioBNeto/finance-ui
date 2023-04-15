import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL;

function Login({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        // login successful
        onLogin();
      } else {
        // login failed
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 mx-auto border p-4 text-center">
          <form noValidate onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label htmlFor="login" hidden>
                Login
              </label>
              <input
                type="text"
                className="form-control mt-3"
                name="login"
                placeholder="Enter login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
