import React from "react";
import "../styles/Projects.css";

// Import project images (if any)
import portfolio from "../assets/portfolio.png";  // Replace with actual paths
import organic from "../assets/organic.png";  // Replace with actual paths
//import project3Image from "../assets/design.jpg";  // Replace with actual paths

const projects = [
  {
    title: "Project 1",
    description: "Portfolio",
    image: portfolio,
    githubLink: "https://github.com/ankita-code05/AnkiBotfolio",
    liveLink: "https://ankibotfolio.onrender.com/"
  },
  {
    title: "Project 2",
    description: "E-commerce web App",
    image: organic,
    githubLink: "https://github.com/ankita-code05/Organic-store",
    //liveLink: "https://project2.com"
  },
  // {
  //   title: "Project 3",
  //   description: "A short description of Project 3.",
  //   image: project3Image,
  //   githubLink: "https://github.com/ankita-code05/project3",
  //   liveLink: "https://project3.com"
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
