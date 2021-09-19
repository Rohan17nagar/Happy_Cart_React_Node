import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { fnPostUsersLogin } from "../../redux/actions/ProductsAction";
import { useHistory } from "react-router";
import Loader from "../../common/Loader/Loader";
import "./UserLogin.scss";

const UserLogin = (props) => {
  const [loginDetails, setLoginDetails] = useState({});
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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

  const handleLoginClick = (loginDetails) => {
    setIsLoading(true);
    props.fnPostUsersLogin(loginDetails, history);
  };
  return isLoading ? (
    <Loader />
  ) : (
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fnPostUsersLogin: (loginCredentials, redirectToHome) =>
      dispatch(fnPostUsersLogin(loginCredentials, redirectToHome)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
