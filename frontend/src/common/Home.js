import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fnGetProductsDetails,
  fnPostUsersDetails,
} from "../redux/actions/ProductsAction";

const Home = (props) => {
  const handleClick = () => {
    props.fnGetProductsDetails();
  };

  const handleClickp = () => {
    props.fnPostUsersDetails();
  };
  return (
    <div>
      {/* <button onClick={() => handleClick()}>click to me call GET API</button>
      <button onClick={() => handleClickp()}>click to me call POST API</button>
      {console.log("hello", props.productsDetails)}
      {console.log("hello", props.usersDetails)}
       */}
      <Link to="/user-registration">Register</Link>
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
