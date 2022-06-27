import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import BSForm from "../components/BSForm";
import andrea from "../assets/images/andrea.PNG";
import "../styles/about.scss";
function About() {
  return (
    <section className="about">
      <h1 className="about__title">About me</h1>
      <div className="about__bio">
        <img className="about__bio-img" src={andrea} alt="Andrea" />

        <p className="about__bio-summary">
          Hi! My name is Andrea Davila, and I am a Communications Graduate
          student at the University of Texas Rio Grande Valley and currently run
          social media for numerous programs such as The UTRGV Drumline, UTRGV
          Winds, and more.
          <br /> &#09; While I am away from the marching world, you can find me
          giving and participating in Latin dance classes with Rhythm Room Dance
          Studio as well as other teams. I have a deep love for the Arts and
          love to fill my days with various components to keep me busy. One
          thing they all share is my love for photography. I love capturing
          moments in the arts where people are truly who they are and doing what
          they love.
        </p>
      </div>
      <div className="about__contact">
        <div className="about__contact-heading">
          <h6>Let's Work Together</h6>
          <p>Get in touch so we can start working together.</p>
          <FaFacebook size="1.5em" style={{ marginRight: "1em" }} />
          <FaInstagram size="1.5em" />
        </div>
        <div className="about__contact-form">
          <BSForm />
        </div>
      </div>
    </section>
  );
}

export default About;
