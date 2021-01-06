import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen dark:bg-dark">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:query/:duration">
              {/* <Switcher /> */}
              <Starter />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
