import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <a className="brand-logo">Trackr</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/" className="waves-effect waves-light btn-small" onClick={props.changeState}>Go To LogIn Page</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar