import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://finance-kohl.vercel.app";

function Form() {
  const [balance, setBalance] = useState(0);
  const [gains, getGain] = useState([]);
  const [debits, getDebit] = useState([]);
  const [gain, setGain] = useState("");
  const [debit, setDebit] = useState("");
  const [descriptionGain, setDescriptionGain] = useState("");
  const [descriptionDebit, setDescriptionDebit] = useState("");

  console.log("gain", gains);
  console.log("debit", debits);

  useEffect(() => {
    fetch(`${API_URL}/gain`)
      .then((response) => response.json())
      .then((data) => {
        const gains = data.map((obj) => ({
          date: obj.date,
          description: obj.description,
          value: obj.value,
        }));
        getGain(gains);
      })
      .catch((error) => {
        console.log("Error fetching gains", error);
      });
  }, [gain, debit, descriptionGain, descriptionDebit]);

  useEffect(() => {
    fetch(`${API_URL}/debit`)
      .then((response) => response.json())
      .then((data) => {
        const debits = data.map((obj) => ({
          date: obj.date,
          description: obj.description,
          value: obj.value,
        }));
        getDebit(debits);
      })
      .catch((error) => {
        console.log("Error fetching debits", error);
      });
  }, [gain, debit, descriptionGain, descriptionDebit]);

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
  }, [gain, debit, descriptionGain, descriptionDebit]);

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
                <h4>Statement</h4>
              </div>
              <div className="card-body text-center">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gains.map((gain) => (
                      <tr key={gain._id}>
                        <td className="text-success">
                          {new Date(gain.date).toLocaleDateString()}{" "}
                          {new Date(gain.date).toLocaleTimeString()}
                        </td>
                        <td className="text-success">{gain.description}</td>
                        <td className="text-success">{gain.value}</td>
                      </tr>
                    ))}
                    {debits.map((debit) => (
                      <tr key={debit._id}>
                        <td className="text-danger">
                          {new Date(debit.date).toLocaleDateString()}{" "}
                          {new Date(debit.date).toLocaleTimeString()}
                        </td>
                        <td className="text-danger">{debit.description}</td>
                        <td className="text-danger">{debit.value}</td>
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
