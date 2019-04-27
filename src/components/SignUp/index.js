import React, { useEffect, useState } from "react";
import { Row, Col, Icon } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import "./styles.scss";

const onChange = setter => e => {
  const { value } = e.target;
  setter(value);
};

function renderForm(inputFields) {
  return inputFields.map((props, i) => (
    <Row key={btoa(i)}>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
};

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");

  const inputFields = [
    {
      value: email,
      placeholder: "E-mail",
      prefix: <Icon type="mail" />,
      onChange: onChange(setEmail)
    },
    {
      value: firstName,
      placeholder: "First name",
      prefix: <Icon type="user" />,
      onChange: onChange(setFirstName)
    },
    {
      value: lastName,
      placeholder: "Last name",
      prefix: <Icon type="user" />,
      onChange: onChange(setLastName)
    },
    {
      value: password,
      type: "password",
      placeholder: "Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setPassword)
    },
    {
      value: confirmPassowrd,
      type: "password",
      placeholder: "Confirm password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setConfirmPassword)
    }
  ];

  return (
    <div className="signInContainer">
      <h2>Sign up</h2>
      <hr />
      <form>
        {renderForm(inputFields)}
        <Row>
          <Col className="col">
            <Button block type="primary">
              Sign up
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignUp;
