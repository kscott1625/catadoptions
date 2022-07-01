import React from 'react';
import logo from '../assets/CAlogo.png';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo}></img>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/adopt">Adopt</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
