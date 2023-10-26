import React from "react";

import Register from "../register/Register";
import Login from "../login/Login";

import "./UserContainer.css";
import UserPanel from "../userPanel/UserPanel";

const UserContainer = ({ user, setUser }) => {
  return (
    <div className="user-container">
      <div className="user-wrapper">
        <Register />
        <Login user={user} setUser={setUser} />
        <UserPanel />
      </div>
    </div>
  );
};

export default UserContainer;
