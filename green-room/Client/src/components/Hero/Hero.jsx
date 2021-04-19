import React from "react";
// import hero from "../../assets/photos/filip-andrejevic-QmX5lw8StoQ-unsplash.jpg";
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
                <button className="hero__logIn">Log In</button>
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
