import axios from "axios";
const baseURL = "http://localhost:8000";
const axiosInstance = axios.create({});

axiosInstance.defaults.baseURL = baseURL;
axiosInstance.defaults.headers.get["Content-Type"] = "application/json";

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = "/";
  }
  return response;
};
const errorHandler = (error) => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.request.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
