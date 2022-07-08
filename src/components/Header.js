import React, { useState } from "react";
import "../styles/header.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Header() {
  const [visible, setVisible] = useState(false);

  const showMobileMenu = () => {
    setVisible((curr) => setVisible(!curr));
  };
  return (
    <nav className="nav">
      <div className="nav__brand">
        <button
          class="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={showMobileMenu}
        >
          <span class="sr-only">Menu</span>
        </button>

        <a className="nav__brand-name" href="/">
          Andrea Davila
        </a>
      </div>
      <div>
        <ul className="nav__links primary-nav">
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
