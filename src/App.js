import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component = { Homepage } />
          <Route path="/login" component = { Login } />
          <Route path="/dashboard" component = { Dashboard }/>
          <Route path="/activity" component = { Activity }/>
        </div>
      </Router>
    );
  }
}


export default App

