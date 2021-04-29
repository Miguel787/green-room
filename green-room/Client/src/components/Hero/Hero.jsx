import React from "react";
import "./Hero.scss";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Vid from "../../assets/photos/video/Livemusicconcert.mp4";
function Hero() {
  return (
    <div>
      <section className="hero__box">
        <div className="hero__background">
          <video loop={true} autoPlay="autoPlay" muted className="hero__video">
            <source src={Vid} type="video/mp4" />
          </video>
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
