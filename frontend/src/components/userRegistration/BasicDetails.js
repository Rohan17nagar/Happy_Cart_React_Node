import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./BasicDetails.scss";
import { Button, Grid } from "@material-ui/core";

const BasicDetails = () => {
  const [basicDetails, setBasicDetails] = useState({});

  const handleTextFieldChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Grid className="bd-container">
      <Grid className="bd-grid">
        <h3 className="bd-heading">ENTER BASIC DETAILS</h3>
        <TextField
          className="textField"
          id="firstName"
          label="First Name"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.firstName}
        />

        <TextField
          className="textField"
          id="lastName"
          label="Last Name"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.lastName}
        />

        <TextField
          className="textField"
          id="username"
          label="Email"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.username}
        />

        <TextField
          className="textField"
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.password}
        />

        <TextField
          className="textField"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.confirmPassword}
        />

        <TextField
          className="textField"
          id="mobile"
          label="Mobile No."
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.mobile}
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
export default BasicDetails;
