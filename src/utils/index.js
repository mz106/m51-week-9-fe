import { getTokenFromCookie, writeCookie } from "../common";

export const registerUser = async (username, email, password) => {
  //   console.log(process.env.REACT_APP_BASE_URL);
  try {
    const response = await fetch(`http://localhost:5001/users`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    console.log(response);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  //   console.log(process.env.REACT_APP_BASE_URL);
  try {
    const response = await fetch(`http://localhost:5001/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    writeCookie("jwt_token", data.user.token, 7);
    return data.user;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const token = getTokenFromCookie("jwt_token");

    const response = await fetch("http://localhost:5001/users", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return data.users;
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5001/users/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("hello world from index utils authcheck");
    const data = await response.json();
    console.log("authCheck utils data: ", data);

    // data.user.token = jwt;

    return data.user;
  } catch (error) {
    console.log(error);
  }
};
