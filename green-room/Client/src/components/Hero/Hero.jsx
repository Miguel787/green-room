import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <div>
      <section className="hero__box">
        <div className="hero__background">
          <div className="hero__call">
            <div className="hero__title">Welcome to GreenRoom</div>
            <div>
              <form>
                <Link to="/userhome">
                  <button className="hero__logIn">Log In</button>
                </Link>
                <button className="hero__signUp">Join</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
