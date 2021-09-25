import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fnGetProductsDetails } from "../redux/actions/ProductsAction";

const Products = (props) => {
  useEffect(() => {
    props.fnGetProductsDetails();
  }, []);

  return (
    <ul>
      {props?.productsDetails?.productData?.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    productsDetails: state.ProductsReducer.productsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fnGetProductsDetails: () => dispatch(fnGetProductsDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
