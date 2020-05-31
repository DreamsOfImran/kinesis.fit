import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ComingSoon} />
      <Route path="/secret" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
