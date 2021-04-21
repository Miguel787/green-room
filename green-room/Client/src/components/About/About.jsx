import React from "react";
import "./About.scss";
import Bass from "../../assets/photos/femalebass.jpeg";
import Singer from "../../assets/photos/raul-jimenez-NwLv9LfbpPU-unsplash.jpg";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <FadeInSection>
        <section className="about__box">
          <div className="about__column">
            <h1 className="about__title">Why GreenRoom</h1>
            <img src={Singer} className="about__bass" alt="Singer" />
          </div>
          <div className="about__column--desc">
            <h1 className="about__title--tablet">Why GreenRoom</h1>
            <p>
              GreenRoom was Founded to unite musicians with one another in a way
              that is meaningful. We empower our users to connect in a modern
              way and grow their circle by meeting with friends and collegues
              having a special place that was built for musicians by musicians.
              GreenRoom allows you meet new local musicians and connect with
              past ones allowing for a space to communicate with one another
              freely.
            </p>
            <button className="about__button">Learn More</button>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="about__box--reverse">
          <div className="about__column--desc2">
            <h1 className="about__title--tablet">For Musicians By Musicians</h1>
            <p>
              Our work at GreenRoom has local musicians in mind every step of
              the way. We want to help you land gig after gig by helping make
              the business side of things as easy as possible so you can focus
              on performing your art with as little worry as possible. If one of
              your bandmates cancel last minute you can use GreenRoom's SOS post
              to send a notification to your network of musicians so everyone
              gets the word and the show can go on.
            </p>
            <button className="about__button">Learn More</button>
          </div>
          <div className="about__column">
            <h1 className="about__title">For Musicians By Musicians</h1>
            <img src={Bass} className="about__bass" alt="Bass player" />
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}

export default About;
