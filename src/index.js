import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:id" component={Pokemon} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
