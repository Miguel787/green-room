import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <section className="header__box">
        <div>
          <Link to="/" className="header__logo">
            <h3>Green Room</h3>
          </Link>
        </div>

        <div className="header__nav">
          <Link to="/about" className="header__about">
            <span>About</span>
          </Link>
          <Link to="/sign-up" className="header__faq">
            <span>FAQ</span>
          </Link>
          <Link to="/sign-up" className="header__contact">
            <span>Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Header;
