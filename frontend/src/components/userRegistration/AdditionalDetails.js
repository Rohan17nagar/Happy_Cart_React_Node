import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./AdditionalDetails.scss";
import { Button, Grid } from "@material-ui/core";

const AdditionalDetails = () => {
  const [additionalDetails, setAdditionalDetails] = useState({});

  useEffect(() => {}, [additionalDetails]);

  const handleTextFieldChange = (e) => {
    setAdditionalDetails({
      ...additionalDetails,
      [e.target.id]: e.target.value,
    });
  };

  const allFieldsFilled = () => {};

  return (
    <Grid className="ad-container">
      <Grid className="ad-grid">
        <h3 className="ad-heading">ENTER ADDITIONAL DETAILS</h3>
        <TextField
          className="textField"
          id="firstName"
          label="First Name"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.firstName}
        />

        <TextField
          className="textField"
          id="lastName"
          label="Last Name"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.lastName}
        />

        <TextField
          className="textField"
          id="username"
          label="Email"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.username}
        />

        <TextField
          className="textField"
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.password}
        />

        <TextField
          className="textField"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.confirmPassword}
        />

        <TextField
          className="textField"
          id="mobile"
          label="Mobile No."
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={additionalDetails.mobile}
        />
        <Button
          variant="contained"
          color="primary"
          className="submit-btn"
          type="submit"
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};
export default AdditionalDetails;
