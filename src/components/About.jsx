import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m Ankita, currently pursuing MCA (2nd semester) and have 1.3 years of internship experience in Full-Stack Development.
          I’m passionate about building user-focused applications using modern technologies. Right now, I’m focused on frontend development with React,
          while also learning cloud platforms like AWS, Azure, and GCP.
        </p>
        <p className="about-text">
          I’ve completed certifications from Harvard and enjoy building projects that involve AI integrations like chatbots. My goal is to deliver clean UI, responsive design, and meaningful user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
