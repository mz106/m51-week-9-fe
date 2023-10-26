import React from "react";
import "./Login.css";

import { useState } from "react";
import { login } from "../../../utils";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello from login fe");
    const loggedUser = await login(username, password);
    console.log("loggedUser", loggedUser);
    await setUser(loggedUser);
    console.log(user);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => handleChange(e, setUsername)}
          />

          <input
            type="text"
            placeholder="password"
            onChange={(e) => handleChange(e, setPassword)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
