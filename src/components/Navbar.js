import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return ( localStorage.getItem('usertoken') ? 
    <nav className="nav-wrapper teal darken-4">
      <div className="container">
        <a className="brand-logo">Trackr.</a>
        <ul className="right">
          <li><Link to="/">Homepage</Link></li>
          {/*<li><Link to="/dashboard">Dashboard</Link></li>*/}
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/thirdboard">Board</Link></li>
          <li><Link to="/login" className="waves-effect waves-light btn-small" onClick={props.logOut}>LOGOUT</Link></li>
          <li>Welcome, {localStorage.getItem('username') } </li>
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
}

export default Navbar