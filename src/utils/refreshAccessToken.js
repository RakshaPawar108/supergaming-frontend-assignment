import axios from "axios";
import { toast } from "react-toastify";

export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post("https://test.indusgame.com/auths", {
      refreshToken,
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response;
      if (status === 400) {
        toast.error(`Bad Request: ${data.reason} (${data.hint})`, {
          theme: "dark",
        });
      } else if (status === 404) {
        toast.error(`Not Found: ${data.reason} (${data.hint})`, {
          theme: "dark",
        });
      }
      toast.error(`Request failed with status code ${status}`, {
        theme: "dark",
      });
    } else if (err.request) {
      toast.error("No response received from the server", {
        theme: "dark",
      });
    } else {
      return err;
    }
  }
};
