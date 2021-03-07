import React from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import AppBar from "./components/NavBar";
import Button from "./components/Button";
import Hero from "./components/Hero";
import LockerList from "./components/Locker";
import Loading from "./components/Loading";

const BASE_URL = "https://fierce-basin-38641.herokuapp.com/locker";
var username = "user";
var password = "password";
var basicAuth = "Basic " + btoa(username + ":" + password);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/rent",
    component: Rent,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lockers: null,
      cart: [],
      searchTerm: "",
    };

    this.search = this.search.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  search(e) {
    e.preventDefault();
  }

  onSearchChange(e) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    Axios.get(BASE_URL)
      .then(({ data }) => this.setState({ lockers: data }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { lockers, searchTerm, error } = this.state;

    return (
      <Router>
        {error ? (
          <Loading />
        ) : (
          <Switch>
            <Route path="/rent">
              <Rent />
            </Route>
            <Route path="/">
              <Home
                lockers={lockers}
                onSearchChange={this.onSearchChange}
                searchTerm={searchTerm}
                count={!lockers ? "0" : lockers.length}
              />
            </Route>
          </Switch>
        )}
      </Router>
    );
  }
}

function Home({ search, onSearchChange, searchTerm, lockers, count }) {
  return (
    <>
      <AppBar />
      <Hero onSubmit={search} onSearchChange={onSearchChange} count={count} />
      <LockerList lockers={lockers} searchTerm={searchTerm} />
    </>
  );
}

function Rent() {
  return (
    <>
      {" "}
      <AppBar />
      <h1>You have successfully navigated to the rent page</h1>{" "}
    </>
  );
}

export default App;
