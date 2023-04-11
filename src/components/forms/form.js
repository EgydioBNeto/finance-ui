import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="card">
            <div className="card-header">
              <h4>Form</h4>
            </div>
            <div className="card-body text-center">
              <form>
                <div className="form-group mt-2 ">
                  <input
                    type="text"
                    className="form-control"
                    id="gain"
                    placeholder="Enter Gain"
                  />
                </div>
                <div className="form-group mt-4 ">
                  <input
                    type="text"
                    className="form-control"
                    id="debit"
                    placeholder="Enter Debit"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 col-md-3">
                  Submit
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
              <h1 className="text-success">0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
