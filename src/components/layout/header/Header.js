import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  if (!user.token) {
    return <h1>You're not logged</h1>;
  }

  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>Hi {user.username}, You are logged in to Amazing Website</h1>
      </div>
    </header>
  );
};

export default Header;
