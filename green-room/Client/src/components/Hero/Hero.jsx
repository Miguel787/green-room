import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

function Hero() {
  return (
    <div>
      <section className="hero__box">
        <div className="hero__background">
          <div className="hero__call">
            <div className="hero__title">Welcome to GreenRoom</div>
            <div>
              <form>
                <Login />
                <SignUp />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
