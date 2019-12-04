import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { SignIn, SignUp } from "./Authentication";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById("home")
);

serviceWorker.unregister();
