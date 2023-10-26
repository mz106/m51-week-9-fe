import React from "react";
import Card from "../card/Card";

import "./CardContainer.css";

const CardContainer = ({ users }) => {
  console.log("cardcontainer users: ", users);
  const fakeUsers = [
    "bill",
    "jane",
    "fred",
    "sarah",
    "bob",
    "alice",
    "michael",
    "geoff",
  ];

  return (
    <div className="card-container">
      <div className="card-wrapper">
        {users.map((user, index) => (
          <Card user={user} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
