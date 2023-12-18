import axios from "axios";

export const weatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

weatherInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      APPID: "d56752efbc1e39c0d37e47f7625983a9",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

weatherInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
