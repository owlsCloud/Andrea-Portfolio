import React from "react";
import "../styles/contactForm.scss";
function ContactForm() {
  return (
    <form action="">
      <div className="contactForm">
        <div className="contactForm__name">
          <div className="contactForm__name-first">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="contactForm__name-last">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className="contactForm__email">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="contactForm__phone">
            <label htmlFor="">Phone</label>
            <input type="text" />
          </div>
        </div>

        <div>
          <div className="contactForm__msg">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
