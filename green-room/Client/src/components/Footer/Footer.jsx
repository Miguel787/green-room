import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/photos/icons8-facebook-50.png";
import Twitter from "../../assets/photos/icons8-twitter-50.png";
import Instagram from "../../assets/photos/icons8-instagram-50.png";
import Logo from "../../assets/photos/70b9f23607244c9684ecae021535dcff.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <h2 className="footer__title">Follow Us @GreenRoom </h2>
        <div className="footer__row">
          <img src={Logo} className="footer__logo" alt="logo" />

          <div className="footer__icons">
            <img
              src={Facebook}
              className="footer__icons--size"
              alt="Facebook"
            />
            <img src={Twitter} className="footer__icons--size" alt="Twitter" />
            <img
              src={Instagram}
              className="footer__icons--size"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
