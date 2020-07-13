import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return ( (localStorage.getItem('usertoken') && localStorage.getItem('verified') ) ? 
    <div>
      {/*<ul id="dropdown1" class="dropdown-content">
        <li><i className="material-icons prefix">info_outline</i>{localStorage.getItem('username')}</li>
        <li><Link to="/login" className="red btn-small" onClick={this.props.logOut}>LOGOUT</Link></li>
      </ul>*/}
      <nav className="nav-wrapper teal darken-4">
        <div className="container">
          <a href="#!" className="brand-logo">Trackr.</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/board">Board</Link></li>
            <li><Link to="/login" className="waves-light btn-small" onClick={this.props.logOut}>LOGOUT</Link></li>
          </ul>
        </div>
      </nav> 
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/board">Board</Link></li>
        <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={this.props.logOut}>LOGOUT</Link></li>
        <li>Welcome, { localStorage.getItem('username') } </li>
    </ul>
    </div>
    :
    <div>
    <nav className="nav-wrapper teal darken-4">
      <div className="container">
        <a href="#!" className="brand-logo">Trackr.</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/login" style={{color: "grey"}}>Board</Link></li>
          <li><Link to="/login" className="waves-light btn-small">LOGIN</Link></li>
        </ul>
      </div>
    </nav> 
    <ul className="sidenav" id="mobile-demo">
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/board">Board</Link></li>
      <li><Link to="/login" className="waves-effect waves-light btn-small">LOGIN</Link></li>
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