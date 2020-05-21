import React, { Component } from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import About from './About'
import Homepage from './Homepage'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <a class="waves-effect waves-light btn-small putBottom" onClick={this.props.changeState}>Go To LogIn</a>
          <Route exact path="/" component={Homepage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default Home