import "./App.css";

import { useState } from "react";

import CardContainer from "./components/cards/cardContainer/CardContainer";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import UserContainer from "./components/user/userContainer/UserContainer";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  return (
    <div className="App">
      <Header user={user} />
      <CardContainer />
      <UserContainer user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
