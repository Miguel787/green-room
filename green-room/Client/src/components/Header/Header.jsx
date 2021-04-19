import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/photos/70b9f23607244c9684ecae021535dcff.png";

function Header() {
  return (
    <div className="header">
      <section className="header__box">
        <div>
          <Link to="/" className="header__logo">
            <img src={Logo} className="header__logo" />
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
