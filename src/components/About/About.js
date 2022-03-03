import React from "react";
import "./about.css";
import saree from "./saree.jpg";

const About = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name"> 
            WE ARE CONSULTING FOR YOUR BUSINESS FINANCES
          </h1>

          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button>VIEW MORE</button>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={"https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default About;



