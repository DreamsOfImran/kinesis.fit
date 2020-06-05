import React from "react";
import Home from "./pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import PageNotFound from "./pages/PageNotFound";
import Service from "./pages/Service";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ComingSoon} />
      <Route path="/secret" component={Home} />
      <Route path="/service/:name" component={Service} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Redirect from="*" to="/page-not-found" />
    </Switch>
  );
};

export default App;
