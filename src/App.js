import "./App.css";

import { useState, useEffect } from "react";

import CardContainer from "./components/cards/cardContainer/CardContainer";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import UserContainer from "./components/user/userContainer/UserContainer";
import { authCheck } from "./utils";
import { getTokenFromCookie } from "./common";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  useEffect(() => {
    if (document.cookie) {
      console.log(document.cookie);
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
        loginInWithToken(token, setUser);
      }
    }
  }, []);

  const loginInWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    console.log("app.js persistantuser: ", persistantUser);
    await setUser(persistantUser);
  };

  return (
    <div className="App">
      <Header user={user} />
      <CardContainer users={users} />
      <UserContainer user={user} setUser={setUser} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
