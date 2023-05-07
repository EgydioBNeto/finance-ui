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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                />
              </svg>{" "}
              Exit
            </button>
            <hr className="my-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
