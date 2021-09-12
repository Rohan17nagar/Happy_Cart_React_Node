import {
  GET_PRODUCTS_DETAILS_API,
  POST_USERS_DETAILS_API,
} from "../../api/ApiEndpoints";
import { getApiCall, postApiCall } from "../../axios/apiCall";
import axios from "axios";
import * as ActionType from "../actionType/actionTypes";

// GET PRODUCT'S DETAILS API CALL --
export const fnGetProductsDetails = () => {
  return (dispatch) => {
    getApiCall(GET_PRODUCTS_DETAILS_API)
      .then((res) => {
        const productsDetails = res.data;
        dispatch({
          type: ActionType.GET_PRODUCTS_DETAILS_SUCCESS,
          payload: productsDetails,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.GET_PRODUCTS_DETAILS_FAILURE,
          payload: {},
        });
      });
  };
};

//POST USER'S DATA API CALL --
export const fnPostUsersDetails = (postUsersDetails) => {
  // let data = {
  //   firstName: "Rohan",
  //   lastName: "Nagar",
  //   username: "rohan@gmail.com",
  //   password: "123456789",
  //   confirmPassword: "123456789",
  //   mobile: "123456789",
  // };

  return (dispatch) => {
    postApiCall(POST_USERS_DETAILS_API, postUsersDetails)
      .then((res) => {
        dispatch({
          type: ActionType.POST_USERS_DETAILS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.POST_USERS_DETAILS_FAILURE,
          payload: {},
        });
      });
  };
};
