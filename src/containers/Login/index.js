import React from "react";
import SignIn from "components/SignIn";
import { Layout } from "antd";
import requests from 'requests';
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="loginContainer">
      <SignIn onLogin={onLogin} />
    </div>
  );
}

const onLogin = (email, password) => () => {
  requests.auth.login(email, password);
}

export default LoginContainer;
