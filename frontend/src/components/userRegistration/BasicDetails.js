import React, { useEffect, useState } from "react";
import "./BasicDetails.scss";

const BasicDetails = () => {
  //useStates definition
  const [basicDetails, setBasicDetails] = useState({});

  //useEffects calls
  useEffect(() => {
    let userDetails = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
    };
    setBasicDetails(userDetails);
  }, []);

  // Function Definitions
  const handleTextFieldChange = (e) => {
    setBasicDetails({});
  };

  return (
    <div className="bd-container">
      <h3 className="bd-heading">Enter Basic Details :</h3>

      <label>First Name* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />

      <label>Last Name* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />

      <label>Email* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />

      <label>Password* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />

      <label>Confirm Password* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />

      <label>Mobile No.* :</label>
      <input
        type="text"
        onChange={(e) => handleTextFieldChange(e)}
        value={basicDetails.username}
      />
    </div>
  );
};
export default BasicDetails;
