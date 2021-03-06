import { Route, Switch } from "react-router-dom";
import React from "react";

import "./App.css";
import Welcome from "./Components/welcome/Welcome";
import Clock from "./Components/clock/Clock";
import Contact from "./Components/contact/Contact";
import Navigation from "./Components/navigation/Navigation";
import ReportNoLoad from "./Components/reportNoLoad/ReportNoLoad";
import Jeopardy from "./Components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} name="Narayan" />} />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/Welcome/:name" component={Welcome} />
        <Route exact path="/jeopardy" component={Jeopardy} />
        <Route path="*" component={ReportNoLoad} />
      </Switch>
    </div>
  );
}

export default App;
