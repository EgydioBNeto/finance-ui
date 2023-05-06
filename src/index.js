import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Form from "./components/forms/form.js";
import Login from "./components/login/login.js";
import Register from "./components/register/register.js";

const App = () => {
  const [page, setPage] = useState("login");

  const handleLogin = () => {
    setPage("form");
  };

  const handleRegister = () => {
    setPage("register");
  };

  let componentToRender = (
    <Login onLogin={handleLogin} onRegister={handleRegister} />
  );

  if (page === "form") {
    componentToRender = (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  } else if (page === "register") {
    componentToRender = <Register onLogin={handleLogin} />;
  }

  return <React.StrictMode>{componentToRender}</React.StrictMode>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
