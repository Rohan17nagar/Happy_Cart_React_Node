import { combineReducers } from "redux";
import ProductsReducer from "../reducers/ProductsReducer";

const rootReducer = combineReducers({
  ProductsReducer,
});

export default rootReducer;
