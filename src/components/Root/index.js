import React, { useEffect } from "react";
import CustomRoute from "routes/CustomRoute";
import { Provider, connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "routes/history";
import stores from "stores";
import { actionTypes } from "stores/actions";

function Root(props) {
  // props = {user: {}, post: {}, setPrivacies: () => {}}
  useEffect(() => {
    // stores.subscribe(() => {
    //   const state = stores.getState();
    //   console.log('Post is changed', state.post);
    // })
    // PrivacyRequest().then(result => {
    //   // const dispatch = stores.dispatch;
    //   // dispatch({ type: actionTypes.SET_PRIVACIES, payload: result });
    //   props.setPrivacies(result);
    // });
  }, []);
  useEffect(() => {
    console.log("Post is changed", props.post);
  }, [props.post]);
  return (
    // <Provider store={stores}>
    <Router history={history}>
      <CustomRoute />
      {/* <NonAukthRoute /> */}
      {/* <Route component={() => <h1>paragraph</h1>} /> */}
    </Router>
    // </Provider>
  );
}

const withProvider = Component => props => {
  return (
    <Provider store={stores}>
      <Component {...props} />
    </Provider>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    setPrivacies: data =>
      dispatch({ type: actionTypes.SET_PRIVACIES, payload: data })
  };
};

export default withProvider(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
