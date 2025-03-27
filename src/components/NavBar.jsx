import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Not_MySpace</h1>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/profile/username" className="nav-item">
            Profile
          </Link>
          <Link to="/friends" className="nav-item">
            Friends
          </Link>
          <Link to="/music" className="nav-item">
            Music
          </Link>

          <Link to="/settings" className="nav-item">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
