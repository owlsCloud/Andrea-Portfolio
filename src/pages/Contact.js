import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/pages/contact.scss";
import andrea from "../assets/images/andrea_contact.PNG";
function Contact() {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__content-form">
          <ContactForm />
        </div>
        <div className="contact__content-img">
          <img src={andrea} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
