import axiosInstance from "./axiosGetPost";

export const getApiCall = () => {
  return axiosInstance({
    method: "GET",
    url: url,
  });
};

export const postApiCall = (url, payload) => {
  return axiosInstance({
    method: "POST",
    url: url,
    data: payload,
  });
};
