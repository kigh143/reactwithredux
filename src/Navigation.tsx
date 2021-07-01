import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CounterPage from "./features/counter/CounterPage";
import Notfound from "./Notfound";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CounterPage} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
