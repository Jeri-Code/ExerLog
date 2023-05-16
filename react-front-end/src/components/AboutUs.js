import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Brandon from "../img/brandon.jpg";
import Jericho from "../img/jericho.jpg";

export default function AboutUs(props) {
  return (
    <div>
	<h1 className="title">Meet the Team</h1>
    <div className="about-us-container">
      <div className="team-member">
        <h2>Brandon Tran</h2>
        <img src={Brandon} alt="Brandon Tran" />
        <p>Applied Computing, UW Bothell</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/trandonbran/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/brandon.tran">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="team-member">
        <h2>Jericho Timbol</h2>
        <img src={Jericho} alt="Jericho Timbol" />
        <p>Applied Computing, UW Bothell</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jericho-timbol/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/jerichot__/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
</div>
  );
}
