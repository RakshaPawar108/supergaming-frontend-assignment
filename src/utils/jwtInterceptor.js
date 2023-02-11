import axios from "axios";

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.request.use((config) => {
  let accToken = localStorage.getItem("accessToken");
  config.headers.common["Authorization"] = `Bearer ${accToken}`;
  return config;
});

export { jwtInterceptor };
