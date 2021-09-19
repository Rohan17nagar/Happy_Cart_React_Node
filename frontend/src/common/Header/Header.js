import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-logo" to="/">
        HAPPY CART
      </Link>
      <Link className="header-link" to="/products">
        PRODUCTS
      </Link>
      <Link className="header-link" to="/about">
        ABOUT US
      </Link>
      <Link className="header-link-align" to="/user-registration">
        REGISTER
      </Link>
      <Link className="header-link-align" to="/user-login">
        LOGIN
      </Link>
    </div>
  );
};
