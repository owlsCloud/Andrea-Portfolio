import React from "react";
import "../styles/contact.scss";
import andrea from "../assets/images/andrea_contact.PNG";
function Contact() {
  return (
    <section className="contact">
      <div className="contact__content">
        <div></div>
        <img src={andrea} alt="" />
      </div>
    </section>
  );
}

export default Contact;
