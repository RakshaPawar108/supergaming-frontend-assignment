import { jwtInterceptor } from "./jwtInterceptor";

export const logout = async () => {
  try {
    const response = jwtInterceptor.post("https://test.indusgame.com/logouts");

    return response;
  } catch (err) {
    console.log(err);
  }
};
