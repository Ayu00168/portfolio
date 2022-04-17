import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://scontent-maa2-1.xx.fbcdn.net/v/t39.30808-6/272297228_4482434021884878_3227646424761419866_n.jpg?stp=c0.313.1080.1080a_dst-jpg_s851x315&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=tiZvWvdpe38AX8-z3vH&tn=au0vo0ycyzRHlnvX&_nc_ht=scontent-maa2-1.xx&oh=00_AT8F1BFMYuMKAHKXnN71KLf4lUdUs2thbJpNbJV8R52RKg&oe=62615CDE"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          I am passionate coder who loves to design Full-Stack Websites.
        </p>
        <p className="a-desc">
          Hello! My name is Ayush Ranjan and I am a B-Tech student pursuing my
          degree from C.V Raman Global Unversity.I love to design Code in the
          dark, and hobbies includes poetry and to know more about my the
          ancient India.
        </p>
        <div className="a-award">
          <img
            src="https://cdn.pixabay.com/photo/2016/05/24/07/01/champions-1411861__340.jpg"
            alt=""
            className="a-award-image"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">My Achievements</h4>
            <p className="a-awrad-desc">
              <a href="https://drive.google.com/file/d/1oVM99YREErubbjICXdXM1R7bCFBSOHRb/view?usp=sharing">
                Web Development
              </a>

              <a href="https://drive.google.com/file/d/1ovcJbpWoYN2bc-79kB1wgCHi9kfHcldu/view?usp=sharing">
                Data Structures
              </a>

              <a href="https://drive.google.com/file/d/1phA8lSZxYJ81-9STQQG5y43u9qoQNfdE/view?usp=sharing">
                Training
              </a>

              <a href="https://drive.google.com/file/d/1lR2e1yafJy6cYEjqLuVTzcQn698G_taN/view?usp=sharing">
                React JS
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
