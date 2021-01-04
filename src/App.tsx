import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Switcher from "./components/Switcher";
import Progress from "./components/Progress";

import Home from "./pages/Home";
import Starter from "./pages/Starter";

function App() {
  return (
    <GlobalProvider>
      <div className="h-full bg-gray-100 dark:bg-dark">
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
