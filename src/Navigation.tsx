import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfound from "./Notfound";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
