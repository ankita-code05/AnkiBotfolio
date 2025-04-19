import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience-section" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="role">Frontend Developer Intern</h3>
              <span className="company">XYZ Technologies</span>
              <span className="date">Jan 2023 – Jun 2024</span>
              <p>
                Built interactive UIs with React.js and improved component reusability. Collaborated with designers to maintain consistent visual language.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="role">Freelance Web Developer</h3>
              <span className="company">Self-Employed</span>
              <span className="date">Jul 2024 – Present</span>
              <p>
                Delivered personal and commercial websites with smooth animations, responsive layouts, and SEO optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
