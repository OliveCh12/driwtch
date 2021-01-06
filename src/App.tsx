import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen dark:bg-dark">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:query/:duration">
              <Starter />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
