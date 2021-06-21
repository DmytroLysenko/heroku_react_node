import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./views/Main";
import About from "./views/About";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/about" >
        <About />
      </Route>
    </Switch>
  );
}

export default App;
