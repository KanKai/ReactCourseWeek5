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
  // let redirectTo = `${location.pathname}${location.search}`;
  if (loggedIn) {
    switch (location.pathname) {
      case "/":
      case "/signin":
      case "/signup": {
        return <Redirect to="/timeline" />;
      }
    }
  } else {
    switch (location.pathname) {
      case "/signin":
        return <Login />;
      case "/signup": {
        return <Register />;
      }
      default:
        return <Login />;
    }
  }
}

function CustomRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Authorization} />
      <Route exact path="/signin" component={Authorization} />
      <Route exact path="/signup" component={Authorization} />
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
