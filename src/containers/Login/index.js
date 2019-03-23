import React from "react";
import SignIn from "components/SignIn";
import { Layout } from "antd";
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="loginContainer">
      <SignIn />
    </div>
  );
}

export default LoginContainer;
