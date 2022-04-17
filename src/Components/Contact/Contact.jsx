import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../image/Phone.jpg";
import Email from "../../image/email.jpg";
import Address from "../../image/address.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4getwi",
        "template_fpow6jn",
        formRef.current,
        "UzR6YxfYzFAXssrqM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets Work Together!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9358226439
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              ranjanayush88@hotmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              A5-B-203 Adinath Apartments, Near C V Raman Global Universirty
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Whats on your mind?</b> Get in touch. Share your imagination and
            I will make it alive.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
