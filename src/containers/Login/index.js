import React from "react";
import SignIn from "components/SignIn";
import { Layout } from "antd";
import history from 'routes/history';
import requests from 'requests';
import {Helmet} from 'react-helmet'
import "./styles.scss";

function LoginContainer() {
  return (
    <div className="loginContainer">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignIn onLogin={onLogin} />
    </div>
  );
}

const onLogin = (email, password) => () => {
  requests.auth.login(email, password, () => {
    history.push('/timeline');
  });
}

export default (LoginContainer);
