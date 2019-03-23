import React from "react";
import { Route } from "react-router-dom";
import Timeline from "containers/Timeline";
import Layout from 'components/Layout';
import Login from "containers/Login";
import Register from "containers/Register";

function AuthRoute() {
  return (
    <Layout>
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/timeline/:id?" component={Timeline} />
      <Route component={() => <h1>Not found</h1>} />
    </Layout>
  );
}

export default AuthRoute;
