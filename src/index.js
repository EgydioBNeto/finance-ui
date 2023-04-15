import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Form from "./components/forms/form.js";
import Login from "./components/login/login.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
          <Header />
          <Form />
          <Footer />
        </>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
