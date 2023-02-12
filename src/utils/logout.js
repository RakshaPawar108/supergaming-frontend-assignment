import axios from "axios";

export const logout = async () => {
  let auth = JSON.parse(localStorage.getItem("auth"));
  let accToken = auth.accessToken;
  try {
    const response = await axios.post(
      "https://test.indusgame.com/logouts",
      {},
      {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};
