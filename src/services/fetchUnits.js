import axios from "axios";


export const fetchUnits = (accessToken) => {
  if (!accessToken) {
    return Promise.reject(new Error("Access token not found in local storage"));
  }
  return axios.get("https://test.indusgame.com/units", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
