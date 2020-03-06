import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import Home from "./components/home/home.components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/home">
             <h1 className="title"> Git Repositories</h1>
          </Link>
          <hr />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
