import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL;

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setSuccess(true);
        onRegister();
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5 mx-auto border p-4 text-center">
          <form noValidate onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">
                Registration successful!
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                className="form-control mt-3"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="email"
                className="form-control mt-3"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
