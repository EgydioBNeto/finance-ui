import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container mb-5 my-3">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Personal Finances App</h1>
            <p className="lead">
              This is a simple app to manage your finances. You can add
              transactions and view your balance.
            </p>
            <button onClick={handleRefresh} className="btn btn-link">
              {"<"} Exit
            </button>
            <hr className="my-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
