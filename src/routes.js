import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Container/Home";
import { MeusPedidos } from "./Container/MeusPedidos";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meusPedidos" component={MeusPedidos} />
      </Switch>
    </Router>
  );
}

