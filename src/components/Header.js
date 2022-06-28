import React from "react";
import "../styles/header.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Header() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <a className="nav__brand-name" href="/">
          Andrea Davila
        </a>
      </div>
      <div>
        <ul className="nav__links">
          <li>
            <a className="nav__links-link" href="/">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="/winds">
              UTRGV Winds
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="/social">
              Social Media
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav__links-socials"
              href="https://www.facebook.com/xylimba/"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              className="nav__links-socials"
              href="https://www.instagram.com/adavilaphotography/"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
