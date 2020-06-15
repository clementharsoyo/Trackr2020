import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return ( props.username ? 
    <nav className="nav-wrapper lime darken-2">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={props.logOut}>LOGOUT</Link></li>
          <li>{ props.username } </li>
        </ul>
      </div>
    </nav> 
    :
    <nav className="nav-wrapper lime darken-2">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={props.logOut}>LOGIN</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar