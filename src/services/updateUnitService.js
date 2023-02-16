import axios from "axios";

export const updateUnitService = (id, requestBody, accessToken) =>
  axios.patch(`https://test.indusgame.com/units/${id}`, requestBody, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: {
      excludeResult: true,
    },
  });
