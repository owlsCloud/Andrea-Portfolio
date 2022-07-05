import React from "react";
import "../styles/contactForm.scss";
function ContactForm() {
  return (
    <form action="">
      <div className="contactForm">
        <div className="contactForm__title">
          <h2>Get in touch</h2>
        </div>
        <div className="contactForm__fname">
          <label htmlFor="">First Name</label>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="contactForm__email">
          <label htmlFor="">Email</label>
          <div>
            <input type="text" name="" id="" />
          </div>
          <label htmlFor="">Phone</label>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="contactForm__msg">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="contactForm__btn">
          <input type="submit" name="" id="" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
