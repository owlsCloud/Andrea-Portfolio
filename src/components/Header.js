import React from "react";
import "../styles/header.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Header() {
  return (
    <nav className="nav">
      <div className="nav__brand">Andrea Davila</div>
      <div>
        <ul className="nav__links">
          <li>
            <a className="nav__links-link" href="">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="">
              About
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="">
              UTRGV Winds
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="">
              Social Media
            </a>
          </li>
          <li>
            <a className="nav__links-link" href="">
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
              href="https://www.instagram.com/perieratanimaequaerentigaudium/"
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
