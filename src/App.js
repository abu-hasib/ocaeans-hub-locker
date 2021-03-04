import React from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import "./App.css";
import AppBar from "./components/NavBar";
import Button from "./components/Button";
import Hero from "./components/Hero";
import LockerList from "./components/Locker";

const BASE_URL = "http://localhost:8000/locker";
var username = "user";
var password = "password";
var basicAuth = "Basic " + btoa(username + ":" + password);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lockers: null,  
      cart: [],
      searchTerm: ""
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
    const { lockers, searchTerm } = this.state;

    return (
      <>
        <AppBar />
        <Hero onSubmit={this.search} onSearchChange={this.onSearchChange} />
        <LockerList lockers={lockers} searchTerm={searchTerm}/>
      </>
    );
  }
}



export default App;
