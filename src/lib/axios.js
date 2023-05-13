import axios from "axios";

const axiosInstanceDefault = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

axiosInstanceDefault.interceptors.request.use(async (config) => {
  config.headers = {
    Accept: "application/json",
  };
  return config;
});

axiosInstanceDefault.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  async (error) => {
    return error;
  }
);

export default axiosInstanceDefault;
