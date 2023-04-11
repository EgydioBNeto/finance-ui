import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Form from "./components/forms/form.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Form />
    <Footer />
  </React.StrictMode>
);
