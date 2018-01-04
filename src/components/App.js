import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Search from "./Search";
import Home from "./Home";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/people/1">
      People
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/planets/1">
      Planets
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/films/1">
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/species/1">
      Species
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/vehicles/1">
      Vehicles
    </NavLink>
    <NavLink activeClassName="active" to="/starships/1">
      Starships
    </NavLink>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavLinks />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:search/:page" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
