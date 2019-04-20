import React, { useEffect, useState } from "react";
import { Row, Col, Icon } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import { Link } from "react-router-dom";
import history from 'routes/history';
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
}

function onSigin(email, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?email=${email}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Email or password incorrect!!!");
      }
    } catch (err) {
      if (err.hasOwnProperty("response")) {
        alert(err.response.error.message);
      }
    }
  };
}

function gotoSignUp() {
  history.push('/signup');
}

function SignIn({onLogin}) {
  if(typeof onLogin !== 'function'){
    onLogin = () => () => {} 
    // เป็นค่าเริ่มต้น เพื่อที่จะสามารถให้ onclick 
    // สามารถทำงานได้ ปรกติแม้ไม่ได้ใส่ function เข้ามาใน onLogin
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputFields = [
    {
      value: email,
      placeholder: "E-mail",
      prefix: <Icon type="mail" />,
      onChange: onChange(setEmail)
    },
    {
      value: password,
      type: "password",
      placeholder: "Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setPassword)
    }
  ];
  return (
    <div className="signInContainer">
      <h2>Sign in</h2>
      <hr />
      <form onSubmit={onSigin(email, password)}>
        {renderForm(inputFields)}
        <Row>
          <Col span={12} className="col">
            <Button block type="primary" onClick={onLogin(email, password)}>
              Sign in
            </Button>
          </Col>
          <Col span={12} className="col">
            {/* <Link to="/signup"> */}
            <Button block type="primary" onClick={gotoSignUp}>
              Sign up
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignIn;
