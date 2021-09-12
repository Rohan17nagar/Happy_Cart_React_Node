import React, { useState } from "react";
import AdditionalDetails from "./AdditionalDetails";
import BasicDetails from "./BasicDetails";
import "./UserRegistration.scss";
const UserRegistration = () => {
  const [selectedBar, setSelectedBar] = useState("Basic Details");

  const handleSelectBar = (selectedBar) => {
    setSelectedBar(selectedBar);
  };

  return (
    <div className="ur-container">
      <div className="ur-b-a-details">
        <div
          className="ur-basic-details"
          onClick={() => handleSelectBar("Basic Details")}
        >
          BASIC DETAILS
        </div>
        <div
          onClick={() => handleSelectBar("Additional Details")}
          className="ur-additional-details"
        >
          ADDITIONAL DETAILS
        </div>
      </div>
      {selectedBar === "Basic Details" ? (
        <BasicDetails />
      ) : (
        <AdditionalDetails />
      )}
    </div>
  );
};

export default UserRegistration;
