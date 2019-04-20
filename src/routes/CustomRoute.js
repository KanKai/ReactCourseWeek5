import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Timeline from "containers/Timeline";
import Layout from "components/Layout";
import Login from "containers/Login";
import Register from "containers/Register";
import { token } from "helpers/util";
function isLoggedIn() {
  return token.hasToken();
}

function Authorization({ match, location, history }) {
  const loggedIn = isLoggedIn();
  // console.log("match", match);
  // console.log("location", location);
  // console.log("history", history);
  let redirectTo = `${location.pathname}${location.search}`;
  if (redirectTo === window.location.pathname) return <></>;
  if (loggedIn) {
    switch (location.pathname) {
      case "/":
      case "/signin":
      case "/signup": {
        redirectTo = "/timeline";
      }
    }
  } else {
    redirectTo = "/signin";
  }
  return <Redirect to={redirectTo} />;
}

function CustomRoute() {
  return (
    <Switch>
      <Route path="/" component={Authorization} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Layout>
        <Switch>
          <Route exact path="/timeline/:id?" component={Timeline} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </Layout>
    </Switch>
  );
}

export default CustomRoute;
