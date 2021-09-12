import React from "react";
import "./Loader.scss";
import images from "../../assets/images/allImages";
const Loader = () => {
  return (
    <div className="loader-container">
      <img src={images.Loader} alt="loader" />
    </div>
  );
};

export default Loader;
