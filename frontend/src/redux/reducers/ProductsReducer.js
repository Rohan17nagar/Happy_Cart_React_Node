import * as ActionType from "../actionType/actionTypes";

const INITIAL_STATE = {
  productsDetails: [],
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        productsDetails: action.payload,
      };
    case ActionType.GET_PRODUCTS_DETAILS_FAILURE:
      return {
        ...state,
        productsDetails: action.payload,
      };

    case ActionType.POST_USERS_DETAILS_SUCCESS:
      return {
        ...state,
        usersDetails: action.payload,
      };
    case ActionType.POST_USERS_DETAILS_FAILURE:
      return {
        ...state,
        usersDetails: action.payload,
      };
    case ActionType.POST_USERS_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUserData: action.payload,
      };

    case ActionType.POST_USERS_LOGIN_FAILURE:
      return {
        ...state,
        loggedInUserData: action.payload,
      };

    default:
      return state;
  }
};
export default ProductsReducer;
