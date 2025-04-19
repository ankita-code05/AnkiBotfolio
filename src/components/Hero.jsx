import React from "react";
import "../styles/Hero.css";
import Profile from "../assets/ankita-2.jpg"

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="hero-content">
        <img src={Profile} alt="Ankita" className="hero-image" />
        <h1 className="hero-title">Hi, I'm Ankita 👋</h1>
        <p className="hero-subtitle">Frontend Developer | React Enthusiast</p>
        <p className="hero-intro">
          I love building responsive and engaging web experiences. Currently exploring AI integrations and modern UI design.
        </p>
        <a href="#projects" className="hero-button">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
