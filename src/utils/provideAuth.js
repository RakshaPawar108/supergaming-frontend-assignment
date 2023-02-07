import axios from "axios";

export const provideAuth = async (username, password) => {
  try {
    const response = await axios.post(`https://test.indusgame.com/logins`, {
      username,
      password,
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};
