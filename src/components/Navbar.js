import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper lime darken-2">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small">Go To Login Page</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar