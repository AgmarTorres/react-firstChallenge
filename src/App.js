import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home/home.components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title"> Git Repositories</h1>
        <hr/>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
