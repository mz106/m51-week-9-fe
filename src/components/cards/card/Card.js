import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <p>{user.username}</p>
    </div>
  );
};

export default Card;
