import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Personal Finances App</h1>
            <p className="lead">
              This is a simple app to manage your finances. You can add
              transactions and view your balance.
            </p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
