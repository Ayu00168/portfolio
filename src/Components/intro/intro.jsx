import React from "react";
import "./intro.css";
import Me from "../../image/Me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is </h2>
          <h1 className="i-name"> Ayush Ranjan </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer </div>
              <div className="i-title-item">MERN Developer </div>
              <div className="i-title-item">Dynamic Coder </div>
              <div className="i-title-item">Node Developer </div>
              <div className="i-title-item"> UI/UX Designer </div>
            </div>
          </div>
          <div className="i-desc">
            I am a Dynamic coder with hands-on experience on defferent Web
            Development Projects, including React Library, Node js, Mongoose,
            Express.Also I have experience in coding with Python Language.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="profilepic" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
