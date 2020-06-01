import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';

class App extends Component {
  state = {
    username: "",
    loggedIn: false
  }

  changeState = (name) => {
    this.setState({
      username: name,
      loggedIn: !this.state.loggedIn
    })
  }

  logOut = () => {
    this.setState({
      username: ""
    })
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username} logOut={this.logOut}/>
          <Route exact path="/" component = { Homepage } />
          <Route path="/login" render={(props)=> <Login changeState = {this.changeState}/>} />
          <Route path="/dashboard" component = { Dashboard }/>
          <Route path="/activity" component = { Activity }/>
        </div>
      </Router>
    );
  }
}


export default App

