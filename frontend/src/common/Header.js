import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">HOME</Link>
      <Link to="/products">PRODUCTS</Link>
      <Link to="/about">ABOUT US</Link>
    </div>
  );
};
