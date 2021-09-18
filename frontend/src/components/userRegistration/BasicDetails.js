import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./BasicDetails.scss";
import { Button, Grid } from "@material-ui/core";
import Loader from "../../common/Loader/Loader";
import { connect } from "react-redux";
import { fnPostUsersDetails } from "../../redux/actions/ProductsAction";

const BasicDetails = (props) => {
  const [basicDetails, setBasicDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    setBasicDetails({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      mobile: "",
    });
  }, []);

  useEffect(() => {
    let anyFieldEmpty = Object.values(basicDetails).includes("");
    if (Object.keys(basicDetails).length >= 0 && !anyFieldEmpty) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  }, [basicDetails]);

  const handleTextFieldChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.id]: e.target.value.trimStart(),
    });
  };

  const handleRegisterClick = () => {
    props.fnPostUsersDetails(basicDetails);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push("/");
    }, 2000);
  };

  return isLoading ? (
    <Loader />
  ) : (
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
          required
          autoComplete="off"
        />

        <TextField
          className="textField"
          id="lastName"
          label="Last Name"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.lastName}
          required
          autoComplete="off"
        />

        <TextField
          className="textField"
          id="username"
          label="Email"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.username}
          required
          autoComplete="off"
        />

        <TextField
          className="textField"
          id="password"
          label="Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.password}
          type="password"
          required
          autoComplete="off"
        />

        <TextField
          className="textField"
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.confirmPassword}
          type="password"
          required
          autoComplete="off"
        />

        <TextField
          className="textField"
          id="mobile"
          label="Mobile No."
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={basicDetails.mobile}
          required
          autoComplete="off"
        />
        <Grid className="bd-buttons">
          <Button
            variant="contained"
            color="primary"
            className="submit-btn"
            type="button"
            disabled={isNextDisabled}
            onClick={() => handleRegisterClick()}
          >
            Register
          </Button>

          <Button
            variant="contained"
            color="primary"
            className="submit-btn"
            type="button"
            disabled={isNextDisabled}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    usersDetails: state.ProductsReducer.usersDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fnPostUsersDetails: (userDetails) =>
      dispatch(fnPostUsersDetails(userDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicDetails);
