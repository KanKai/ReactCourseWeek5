import React from "react";
import SignUp from "components/SignUp";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import {Helmet} from 'react-helmet';
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="registerContainer">
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <div className="backButton">
        <Link to="/signin">
          <Icon type="left" />
          <span>Back</span>
        </Link>
      </div>
      <SignUp />
    </div>
  );
}

export default LoginContainer;
