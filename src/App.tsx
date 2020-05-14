import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import List from "pages/List";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/list" exact={true} component={List} />

          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
