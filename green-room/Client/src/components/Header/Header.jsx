import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/photos/70b9f23607244c9684ecae021535dcff.png";

import { useAuth } from "../../Contexts/AuthContext";

function Header() {
  const { logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch {}
  }
  return (
    <div className="header">
      <section className="header__box">
        <div>
          <Link to="/" className="header__logo">
            <img src={Logo} className="header__logo" alt="Logo" />
          </Link>
        </div>

        <div className="header__nav">
          <Link to="/about" className="header__about">
            <span>About</span>
          </Link>
          <Link to="/sign-up" className="header__faq">
            <span>FAQ</span>
          </Link>
          <Link to="/" className="header__contact">
            <span onClick={handleLogout}>Log Out</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Header;
