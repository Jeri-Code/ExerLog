import React, { useState } from "react";
import GymLogo from "../img/favicon.ico";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={`box ${clicked ? "active" : ""}`} id="navbar">
      <nav className="navbar">
        <Link to="/Homepage" className="logo">
          <img src={GymLogo} alt="Gym Page Logo" aria-label="Home" />
        </Link>
        <div className="menu">
          <Link to="/WeeklyPlanner" className="nav-item" aria-label="Weekly Planner">
            Weekly Planner
          </Link>
          <Link to="/Login" className="nav-item" aria-label="Account">
            Account
          </Link>
          <Link to="/FAQ" className="nav-item" aria-label="FAQ">
            FAQ
          </Link>
          <Link to="/AboutUs" className="nav-item" aria-label="About Us">
            About Us
          </Link>
        </div>
        <div className="auth-buttons">
          <Link to="/Registration" className="auth-button" aria-label="Sign Up">
            Sign Up
          </Link>
          <Link to="/Login" className="auth-button" aria-label="Login">
            Login
          </Link>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
