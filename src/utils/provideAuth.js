import axios from "axios";
import { toast } from "react-toastify";

export const provideAuth = async (username, password) => {
  try {
    const response = await axios.post(`https://test.indusgame.com/logins`, {
      username,
      password,
    });

    return response;
  } catch (err) {
    if (err.response.status === 400) {
      toast.error(`Bad Request: ${err.data.reason}. ${err.data.hint}`, {
        theme: "dark",
      });
    } else if (err.response.status === 404) {
      toast.error(`Not Found: The username does not exist.`, {
        theme: "dark",
      });
    } else if (err.response.status === 409) {
      toast.error(`Conflict: Password mismatch.`, {
        theme: "dark",
      });
    }

    return err
  }
};
