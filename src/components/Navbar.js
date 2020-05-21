import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <a className="brand-logo">Trackr</a>
        <ul className="right">
          <li><a href="/">Homepage</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar