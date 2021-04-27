import React from "react";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
