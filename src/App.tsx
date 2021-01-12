import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen dark:bg-dark">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/:query/:duration" component={Starter} />
              </Switch>
            )}
          />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
