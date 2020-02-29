import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Repositories from './Repositories';
import Home from "./Home";
import Profile from "./Profile";

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/repositories" component={Repositories} />

        <Route path="*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
