import React from "react";
import Bulb from "../img/thinkingbulb.png";
import PaperPlane from "../img/paperplane.png";
import Brain from "../img/brain.png";

export default function FAQ(props) {
return (
    <div class="faq-container">
      <div class="faq-box">
        <img src={PaperPlane} alt="Paper plane with a trail"/>
        <h2>Who are we?</h2>
        <p>This website was created for our capstone project, we wanted to inspire ways to keep people in shape and following a guideline to do so. With this, people can maintain a routine and be more proactive about their schedule.</p>
      </div>
      <div class="faq-box">
        <img src={Brain} alt="Rainbow brain with different subjects surrounding it"/>
        <h2>New to our page?</h2>
        <p>Welcome! This website is a gym planner that allows you to add routines or exercises to a weekly planner. You may also create and save an account on our webpage. Be sure to look around our website and see what features we have to offer.</p>
      </div>
      <div class="faq-box">
        <img src={Bulb} alt="Light bulb made of gears"/>
        <h2>Need goals?</h2>
        <p>Some great ways to start working out are to see what routines or exercises you can start adding to your weekly planner. Have a look at this website, which is what this website is inspired from.</p>
      </div>
    </div>
    )
}
