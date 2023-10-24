import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form className="form">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
