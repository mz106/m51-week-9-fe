import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form className="form">
          <input type="text" placeholder="username" />

          <input type="text" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
