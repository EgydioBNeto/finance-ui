import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const [balance, setBalance] = useState(0);
  const [gain, setGain] = useState("");
  const [debit, setDebit] = useState("");

  useEffect(() => {
    fetch("http://localhost:3030/balance")
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
      });
  }, []);

  const handleGainSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/gain", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: parseFloat(gain) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
        setGain("");
      });
  };

  const handleDebitSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3030/debit", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: parseFloat(debit) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
        setDebit("");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <div className="card-header">
              <h4>Form</h4>
            </div>
            <div className="card-body text-center">
              <form onSubmit={handleGainSubmit}>
                <div className="form-group mt-2 ">
                  <input
                    type="text"
                    className="form-control"
                    id="gain"
                    placeholder="Enter Gain"
                    value={gain}
                    onChange={(event) => setGain(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 col-md-3">
                  Add Gain
                </button>
              </form>
              <form onSubmit={handleDebitSubmit}>
                <div className="form-group mt-4 ">
                  <input
                    type="text"
                    className="form-control"
                    id="debit"
                    placeholder="Enter Debit"
                    value={debit}
                    onChange={(event) => setDebit(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-danger mt-3 col-md-3">
                  Add Debit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              <h4>Balance</h4>
            </div>
            <div className="card-body text-center">
              <h1 className="text-success">{balance}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
