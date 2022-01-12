import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Redirect } from "react-router-dom";
import { checkToken } from "../../lib/api";
import LoginNavBar from "./LoginNavBar";

const LoginButton = ({ state, action }) => {
  return (
    <Grid
      style={{
        cursor: "pointer"
      }}
      disabled={
        (!state.username.valid && state.username.entered) ||
        (!state.password.valid && state.password.entered)
      }
      onClick={e => action()}
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      className="loginButton"
    >
      Login
    </Grid>
  );
};

export const Login = ({ state, addUsername, addPassword, loginRequest }) => {
  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      {/* <img src='https://hungry-hugle-70ea8a.netlify.com/public/images/logo.png' className='logo-login'/> */}
      <LoginNavBar />
      <div className="login">
        <div className="login__wrap">
          <form className="login__form">
            <div className="login__form--group">
              <div className="login__logo">
                <img
                  src={
                    "https://hungry-hugle-70ea8a.netlify.com/public/images/logo.png"
                  }
                  alt="app-logo"
                />
              </div>
              <TextField
                disabled={state.loading}
                error={state.username.entered && !state.username.valid}
                onChange={({ target: { value } }) => addUsername(value)}
                value={state.username.value}
                label="Username"
                className="text_field"
                inputProps={{ style: { fontSize: 20 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </div>
            <div className="login__form--group">
              <TextField
                disabled={state.loading}
                error={state.password.entered && !state.password.valid}
                onChange={({ target: { value } }) => addPassword(value)}
                value={state.password.value}
                className="text_field"
                type="password"
                label="Password"
                inputProps={{ style: { fontSize: 20 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </div>
            {state.loading ? (
              <LinearProgress />
            ) : (
              <LoginButton state={state} action={loginRequest} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export const LoginRoute = ({
  state,
  addUsername,
  addPassword,
  loginRequest
}) => {
  return checkToken() ? (
    <Redirect to="/app" />
  ) : (
    <Login
      state={state}
      addUsername={addUsername}
      addPassword={addPassword}
      loginRequest={loginRequest}
    />
  );
};
