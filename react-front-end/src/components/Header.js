import React from "react";
import { Component } from "react";
import GymLogo from "../img/favicon.ico";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className={`box ${this.state.clicked ? "active" : ""}`} id="navbar">
        <nav className="navbar">
          <a href="/Homepage" className="logo">
            <img src={GymLogo} alt="Gym Page Logo" aria-label="Home" />
          </a>
          <div className="menu">
            <a href="/WeeklyPlanner" className="nav-item" aria-label="Login">
              Weekly Planner
            </a>
            <a href="/Account" className="nav-item" aria-label="Account">
              Account
            </a>
            <a href="/FAQ" className="nav-item" aria-label="FAQ">
              FAQ
            </a>
            <a href="/AboutUs" className="nav-item" aria-label="About Us">
              About Us
            </a>
          </div>
          <div className="auth-buttons">
            <a href="/SignUp" className="auth-button" aria-label="Sign Up">
              Sign Up
            </a>
            <a href="/Login" className="auth-button" aria-label="Login">
              Login
            </a>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}
