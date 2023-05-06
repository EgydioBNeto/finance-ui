import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL;

function Register({ onRegister }) {
  const [register, setRegister] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: register, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        onRegister(token, user);
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during register.");
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 mt-5 mx-auto border p-4 text-center">
          <form noValidate onSubmit={handleSubmitRegister}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
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
                value={register}
                onChange={(event) => setRegister(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" hidden>
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {"View"}
                </button>
              </div>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="my-1">
            <button className="btn btn-link">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
