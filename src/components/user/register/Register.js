import React from "react";
import { useState } from "react";

import "./Register.css";

import { registerUser } from "../../../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = await registerUser(username, email, password);
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => handleChange(e, setUsername)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => handleChange(e, setEmail)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => handleChange(e, setPassword)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
