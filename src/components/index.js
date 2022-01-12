import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "../containers/login";
import Main from "../containers/main";
import Error from "../containers/error";
import { checkToken } from "../lib/api";

const IndexRoute = ({}) => {
  return checkToken() ? <Redirect to="/app" /> : <Redirect to="/login" />;
};

const NoMatch = ({}) => {
  return <Redirect to="/" />;
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={IndexRoute} />
          <Route exact path="/login" component={Login} />
          <Route path="/app" component={Main} />
          <Route component={NoMatch} />
        </Switch>
        <Error />
      </Fragment>
    );
  }
}

export default App;
