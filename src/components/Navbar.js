import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "./Navbar.css"

class Navbar extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, {});
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return ( (localStorage.getItem('usertoken') && localStorage.getItem('verified') ) ? 
    <div>
      <nav className="blue-grey darken-4">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo logo">
            <i className="material-icons">code</i> Trackr
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Homepage</a></li>
            <li><a href="/board">Board</a></li>
            <li><a href="/">Maps</a></li>
            <li><a href="/Metrics">Metrics</a></li>
            <li><a className="dropdown-trigger" data-target='dropdown1'>Privacy</a></li>
            {/*<li><a className="dropdown-trigger" data-target='dropdown1'>Profile</a></li>*/}
            <li><a href="/login" onClick={this.props.logOut}>Log Out</a></li>
          </ul>
        </div>
      </nav> 
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Homepage</a></li>
        <li><a href="/board">Board</a></li>
        <li><a href="/">Maps</a></li>
        <li><a href="/login" onClick={this.props.logOut}>Log Out</a></li>
      </ul>
      <ul id='dropdown1' class='dropdown-content'>
        <li><a href="/editUsername">Change Username</a></li>
        <li><a href="/editPassword">Change Password</a></li>
        <li><a href="/editEmail">Change Email</a></li>
        <li><a href="/SyncLinkedIn">LinkedIn</a></li>
        {/*<li class="divider" tabindex="-1"></li>
        <li><a href="/editprivacy">Privacy</a></li>*/}
      </ul>
    </div>
    :
    <div>
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo logo">
          <i className="material-icons">code</i> Trackr
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">Homepage</a></li>
          <li><a href="/login">Board</a></li>
          <li><a href="/">Maps</a></li>
          <li><a href="/Metrics">Metrics</a></li>
          <li><a href="/login">Privacy</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav> 
    <ul className="sidenav" id="mobile-demo">
      <li><a href="/">Homepage</a></li>
      <li><a href="/login">Board</a></li>
      <li><a href="/">Maps</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
    </div>
  )
  }
}

/*const Navbar = (props) => {
  return ( (localStorage.getItem('usertoken') && localStorage.getItem('verified')) ? 
    <nav className="nav-wrapper teal darken-4">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/thirdboard">Board</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={props.logOut}>LOGOUT</Link></li>
          <li>Welcome, { localStorage.getItem('username') } </li>
        </ul>
      </div>
    </nav> 
    :
    <nav className="nav-wrapper teal darken-4">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={props.logOut}>LOGIN</Link></li>
        </ul>
      </div>
    </nav> 
  )
}*/

export default Navbar