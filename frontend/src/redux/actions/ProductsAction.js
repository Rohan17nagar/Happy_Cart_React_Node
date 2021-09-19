import { getApiCall, postApiCall } from "../../axios/apiCall";
import * as ActionType from "../actionType/actionTypes";
import {
  GET_PRODUCTS_DETAILS_API,
  POST_USERS_DETAILS_API,
  POST_USERS_LOGIN_API,
} from "../../api/ApiEndpoints";

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

export const fnPostUsersLogin = (userCredentials, history) => {
  return (dispatch) => {
    postApiCall(POST_USERS_LOGIN_API, userCredentials)
      .then((res) => {
        dispatch({
          type: ActionType.POST_USERS_LOGIN_SUCCESS,
          payload: res.data,
        });

        sessionStorage.setItem("userData", JSON.stringify(res.data));
        history.push("/");
      })
      .catch((err) => {
        dispatch({
          type: ActionType.POST_USERS_LOGIN_FAILURE,
          payload: {},
        });
      });
  };
};
