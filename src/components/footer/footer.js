import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-5 my-5">
      <div className="container text-center">
        <span className="text-muted">
          All Rights Reserved {currentYear} -{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/egydio-bolonhezi-neto-5748161a2/"
          >
            Egydio Bolonhezi
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
