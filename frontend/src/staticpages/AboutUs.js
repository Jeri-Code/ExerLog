import React from "react";
import Brandon from "../img/brandon.jpg";
import Jericho from "../img/jericho.jpg";

export default function AboutUs(props) {
  return (
    <div>
	<h1 className="about-us-title">Meet the Team</h1>
    <div className="about-us-container">
      <div className="team-member">
        <h1>Brandon Tran</h1>
        <img src={Brandon} alt="Brandon Tran" />
        <p>Applied Computing, UW Bothell</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/trandonbran/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/brandon.tran">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="team-member">
        <h1>Jericho Timbol</h1>
        <img src={Jericho} alt="Jericho Timbol" />
        <p>Applied Computing, UW Bothell</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jericho-timbol/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/jerichot__/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
</div>
  );
}
