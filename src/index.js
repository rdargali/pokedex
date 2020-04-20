import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Pokemon from "./components/Pokemon";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:pokemon" component={Pokemon} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
