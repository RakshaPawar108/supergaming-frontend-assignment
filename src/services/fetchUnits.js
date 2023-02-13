import axios from "axios";

let authData = JSON.parse(localStorage.getItem("auth"));
let accessToken = authData.accessToken;

export const fetchUnits = () =>
  axios.get(
    "https://test.indusgame.com/units",
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
