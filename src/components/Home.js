import React, { Component } from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard'
import About from './About'
import Homepage from './Homepage'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar changeState={this.props.changeState}/>
          <Route exact path="/homepage" component={Homepage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default Home