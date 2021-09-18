import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fnPostUsersLogin } from "../../redux/actions/ProductsAction";
import "./UserLogin.scss";

const UserLogin = (props) => {
  const [loginDetails, setLoginDetails] = useState({});
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  useEffect(() => {
    setLoginDetails({
      username: "",
      password: "",
    });
  }, []);

  useEffect(() => {
    let anyFieldEmpty = Object.values(loginDetails).includes("");
    if (Object.keys(loginDetails).length >= 0 && !anyFieldEmpty) {
      setIsLoginDisabled(false);
    } else {
      setIsLoginDisabled(true);
    }
  }, [loginDetails]);

  const handleTextFieldChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.id]: e.target.value.trimStart(),
    });
  };

  const handleLoginClick = (loginCredentials) => {
    props.fnPostUsersLogin(loginCredentials);
  };
  return (
    <Grid className="login-container">
      <Grid className="login-grid">
        <h3 className="login-heading">ENTER LOGIN DETAILS</h3>
        <TextField
          className="textField"
          id="username"
          label="email"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={loginDetails.username}
          required
          autoComplete="off"
        />
        <TextField
          className="textField"
          id="password"
          label="password"
          variant="outlined"
          onChange={(e) => handleTextFieldChange(e)}
          value={loginDetails.password}
          type="password"
          required
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="primary"
          className="submit-btn"
          type="button"
          disabled={isLoginDisabled}
          onClick={() => handleLoginClick(loginDetails)}
        >
          Login
        </Button>
      </Grid>
    </Grid>
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
    fnPostUsersLogin: (loginCredentials) =>
      dispatch(fnPostUsersLogin(loginCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
