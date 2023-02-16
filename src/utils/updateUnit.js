import { updateUnitService } from "../services";

export const updateUnit = async (id, requestBody) => {
  try {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const accessToken = authData.accessToken;
    const response = await updateUnitService(id, requestBody, accessToken);
    return response;
  } catch (err) {
    console.log(err);
  }
};
