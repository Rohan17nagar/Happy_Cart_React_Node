import axios from "axios";
import axiosInstance from "./axiosGetPost";

const BASE_URL = "http://localhost:8000";

export const getApiCall = (url) => {
  let getApi;
  if (window.location.href.indexOf("localhost:3000") > -1) {
    // return axiosInstance({
    //   method: "GET",
    //   url: url,
    // });
    getApi = axios.get(`${BASE_URL}${url}`);
  }
  return getApi;
};

export const postApiCall = (url, payload) => {
  let postApi;
  if (window.location.href.indexOf("localhost:3000") > -1) {
    // return axiosInstance({
    //   method: "POST",
    //   url: url,
    //   data: payload,
    // });
    postApi = axios.post(`${BASE_URL}${url}`, payload);
  }
  return postApi;
};
