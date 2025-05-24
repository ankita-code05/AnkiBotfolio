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
              <h3 className="role">Chegg Expert</h3>
              <span className="company">Chegg India</span>
              <span className="date">Mar. 2023 – Nov. 2023</span>
              <p>
                Worked as a Subject Matter Expert at Chegg, assisting students
                by solving their academic queries in computer science,
                showcasing strong problem-solving, communication, and mentoring
                abilities.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="role">Full-Stack Developer Trainee</h3>
              <span className="company">The 10x Academy</span>
              <span className="date">sept. 2022 – sept. 2023</span>
              <p>
                Completed a Full Stack Bootcamp at 10x Academy, mastering HTML,
                CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and
                Git. Built and deployed MERN stack applications with features
                like post uploads, deletions, and full survey management
                (create, edit, delete, preview, theme customization).
                Implemented secure user authentication using bcrypt and JWT.
                Gained hands-on experience through real-world projects,
                showcasing technical proficiency and collaboration. 
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="role">Web Designer Intern</h3>
              <span className="company">Dessa IT Snergy</span>
              <span className="date">Oct. 2021 – Dec. 2021</span>
              <p>
                Demonstrated mastery in HTML, CSS, and JavaScript during a
                dynamic 3-month web design internship. Implemented responsive
                designs, ensuring optimal user experiences—an ideal foundation
                for a front-end developer role. Collaborative Team Player:
                Actively contributed to team projects, fostering effective
                communication and integrating feedback to achieve seamless
                project outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
