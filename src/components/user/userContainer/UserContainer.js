import React from "react";

import Register from "../register/Register";
import Login from "../login/Login";

import "./UserContainer.css";

const UserContainer = () => {
  return (
    <div className="user-container">
      <div className="user-wrapper">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default UserContainer;
