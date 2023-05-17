import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkoutMachine from "../img/workoutmachine.png";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    return (
        <div className="login-container">
        <img src={WorkoutMachine} alt="An outline of a workout machine"/>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="forgot-password">
              <Link to="/Homepage">Forgot password?</Link>
            </div>
          </form>
        </div>
      );
};