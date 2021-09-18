import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fnGetProductsDetails,
  fnPostUsersDetails,
} from "../redux/actions/ProductsAction";

const Home = () => {
  return (
    <div>
      <Link to="/user-registration">Register</Link>
      <Link to="/user-login">Login</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsDetails: state.ProductsReducer.productsDetails,
    usersDetails: state.ProductsReducer.usersDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fnGetProductsDetails: () => dispatch(fnGetProductsDetails()),
    fnPostUsersDetails: () => dispatch(fnPostUsersDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
