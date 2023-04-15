import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = process.env.REACT_APP_API_URL;

function Form() {
  const [balance, setBalance] = useState(0);
  const [extract, setExtract] = useState([]);
  const [gain, setGain] = useState("");
  const [debit, setDebit] = useState("");
  const [descriptionGain, setDescriptionGain] = useState("");
  const [descriptionDebit, setDescriptionDebit] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/extract`)
      .then((response) => response.json())
      .then((data) => {
        setExtract(data.extract);
      })
      .catch((error) => {
        console.log("Error fetching balance", error);
      });
  }, [gain, debit]);

  const handleGainSubmit = (event) => {
    event.preventDefault();
    if (!gain) return;
    const gainValue = parseFloat(gain.replace(",", "."));
    const descriptionGain = document.getElementById("descriptionGain").value;
    fetch(`${API_URL}/gain`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: gainValue, description: descriptionGain }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
        setGain("");
        setDescriptionGain("");
      })
      .catch((error) => {
        console.log("Error adding gain", error);
      });
  };

  const handleDebitSubmit = (event) => {
    event.preventDefault();
    if (!debit) return;
    const debitValue = parseFloat(debit.replace(",", "."));
    const descriptionDebit = document.getElementById("descriptionDebit").value;
    fetch(`${API_URL}/debit`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: debitValue,
        description: descriptionDebit,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
        setDebit("");
        setDescriptionDebit("");
      })
      .catch((error) => {
        console.log("Error adding debit", error);
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/balance`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.balance);
      })
      .catch((error) => {
        console.log("Error fetching balance", error);
      });
  }, [gain, debit]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <div className="card-header text-center">
              <h4>Form</h4>
            </div>
            <div className="card-body text-center">
              <form onSubmit={handleGainSubmit}>
                <div className="form-group mt-2 ">
                  <input
                    type="text"
                    className="form-control"
                    id="gain"
                    placeholder="Gain"
                    value={gain}
                    onChange={(event) => setGain(event.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Description"
                    id="descriptionGain"
                    value={descriptionGain}
                    onChange={(event) => setDescriptionGain(event.target.value)}
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
                    placeholder="Debit"
                    value={debit}
                    onChange={(event) => setDebit(event.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Description"
                    id="descriptionDebit"
                    value={descriptionDebit}
                    onChange={(event) =>
                      setDescriptionDebit(event.target.value)
                    }
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
            <div className="card-header text-center">
              <h4>Balance</h4>
            </div>
            <div className="card-body text-center">
              <h1 className="text-success">
                {balance &&
                  balance.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-header text-center">
                <h4>Extract of Values</h4>
              </div>
              <div className="card-body text-center">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extract.map((extract) => (
                      <tr key={extract._id}>
                        <td
                          style={{
                            color: extract.type === "Gain" ? "green" : "red",
                          }}
                        >
                          {extract.type}
                        </td>
                        <td
                          style={{
                            color: extract.type === "Gain" ? "green" : "red",
                          }}
                        >
                          {new Date(extract.date).toLocaleDateString()}{" "}
                          {new Date(extract.date).toLocaleTimeString()}
                        </td>
                        <td
                          style={{
                            color: extract.type === "Gain" ? "green" : "red",
                          }}
                        >
                          {extract.description}
                        </td>
                        <td
                          style={{
                            color: extract.type === "Gain" ? "green" : "red",
                          }}
                        >
                          {extract.value.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
