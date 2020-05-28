import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Logo from './logo.png';
import '../../App.css';

class Login extends Component {

    render() {
      return (
      <Switch>
      <div className="App">
        <div className="App__Aside">
          <img className="centerLogo" src={Logo} height="375" width="500"/>
        </div>
        <div className="App__Form">
  
          <div className="PageSwitcher">
            <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/login/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>
  
          <div className="FormTitle">
            <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign In</NavLink> or 
            <NavLink exact to="/login/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign Up</NavLink>
          </div>
  
          <Route path="/login/signup" component = {SignUpForm}>
          </Route>
          
          <Route exact path="/login" component = {SignInForm}>
          </Route>

        </div>
      </div>
      </Switch>
    );
  }
  }
  
  export default Login;
  