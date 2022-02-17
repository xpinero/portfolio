import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            class="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 class="about-title">About Me</h1>
        <p class="about-sub">It is a long established fact that a reader will be distracted by the readable content</p>
        <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. </p>
      </div>
    </div>
  );
};

export default About;
