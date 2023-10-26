export const writeCookie = (key, value, days = 365) => {
  let date = new Date();

  date.setDate(date.getDate() + days);

  const cookie = (document.cookie =
    key + "=" + value + "; expires" + date.toGMTString() + "; path=/");

  console.log("cookie in writecookie: ", cookie);

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  try {
    const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);

    const cookie = document.cookie.match(expression)[0];

    return cookie;
  } catch (error) {
    console.log(error);
  }
};
