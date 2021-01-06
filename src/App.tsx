import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  console.log(process.env.PUBLIC_URL);

  return (
    <GlobalProvider>
      <div className="h-screen dark:bg-dark">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:query/:duration">
              <Starter />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
