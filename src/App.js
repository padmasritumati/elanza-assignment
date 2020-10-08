import React from "react";
import { Switch, Route } from "react-router-dom";
import homepage from "./pages/HomePage";
import newRequest from "./pages/NewRequest";
import requestDetails from "./components/RequestDetails"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={homepage}></Route>
        <Route path="/new_care_request" component={newRequest}></Route>
        <Route path="/request/:name" component={requestDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
