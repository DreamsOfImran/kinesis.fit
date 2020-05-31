import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ComingSoon} />
      <Route path="/secret" component={Home} />
    </Switch>
  );
};

export default App;
