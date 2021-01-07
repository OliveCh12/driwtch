import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <GlobalProvider>
      <div className="h-screen dark:bg-dark">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/:query/:duration" component={Starter} />
              </Switch>
            )}
          />
        </HashRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
