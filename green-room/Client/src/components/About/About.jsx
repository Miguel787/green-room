import React from "react";
import "./About.scss";
import Bass from "../../assets/photos/femalebass.jpeg";

function About() {
  return (
    <div className="about">
      <section className="about__box">
        <h1 className="about__title">Why GreenRoom</h1>
        <img src={Bass} className="about__bass" alt="bass Player" />

        <p>
          GreenRoom was Founded to unite musicians with one another in a way
          that is meaningful. We empower our users to connect in a modern way
          and grow their circle by meeting with friends and collegues having a
          special place that was built for musicians by musicians. GreenRoom
          allows you meet new local musicians and connect with past ones
          allowing for a space to communicate with one another freely.
        </p>
        <button className="about__button">Learn More</button>
      </section>
    </div>
  );
}

export default About;
