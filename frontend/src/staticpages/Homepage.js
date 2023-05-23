import React from "react";
import Dumbbells from "../img/dumbbells.png";
import Treadmill from "../img/treadmill.png";

const Homepage = (props) => {
  return (
    <div className="welcome">
      <img src={Treadmill} alt="Black treadmill" className="treadmill" />
      <h1 className="title">
        ExerLog
      </h1>
      <a href="/Register"><button className="join-now-btn">Join Now</button></a>      
      <div className="second-title">
        Gym Routines done simple.
        <img src={Dumbbells} alt="Two dumbbells stacked on top of each other" className="dumbbells" />
      </div>
      <div className="sign-up">
        Already signed up? <a href="/Login">Click Here</a>
      </div>
    </div>
  );
};

export default Homepage;
