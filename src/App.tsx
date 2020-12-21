import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RouterConnected = () => {
  return <App />;
};

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Test" children={<Input />} />
        <Route path="/Test/:params" children={<Output />} />
      </Switch>
    </Router>
  );
};

export default RouterConnected;
