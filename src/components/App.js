import React from "react";
// routes
import { Route, Switch } from "react-router-dom";
// // styles
import "../styles/app.scss";

// // components
import Landing from "./Landing";
import ScheduleGenerator from "./SchudleGenerator";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/schedule" component={ScheduleGenerator} />
    </Switch>
  );
};

export default App;
