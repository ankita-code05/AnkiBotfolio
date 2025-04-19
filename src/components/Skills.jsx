import React from "react";
import "../styles/Skills.css";
import htmlSvg from "../assets/html-5.svg";
import cssSvg from "../assets/css-3.svg";
import jsSvg from "../assets/javascript.svg";
import reactSvg from "../assets/react.svg";
import reduxSvg from "../assets/redux.svg";
import nodeSvg from "../assets/nodejs.svg";
import expressSvg from "../assets/express.svg";
import gitSvg from "../assets/Git.svg";
import bootstrapSvg from "../assets/bootstrap.svg";
import nextSvg from "../assets/nextjs.svg";
import typeSvg from "../assets/typescript.svg";
import mongoSvg from "../assets/mongodb.svg";
import awsSvg from "../assets/aws.svg";

const skills = [
  { name: "HTML", icon: htmlSvg },
  { name: "CSS", icon: cssSvg },
  { name: "JavaScript", icon: jsSvg },
  { name: "Bootstrap", icon: bootstrapSvg },
  { name: "React", icon: reactSvg },
  { name: "Rudux", icon: reduxSvg },
  { name: "Node.js", icon: nodeSvg },
  { name: "Express.JS", icon: expressSvg },
  { name: "NextJS", icon: nextSvg },
  { name: "TypeScript", icon: typeSvg},
  { name: "MongoDB", icon: mongoSvg },
  { name: "Git", icon: gitSvg },
  { name: "AWS", icon: awsSvg },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} width={40} height={40} />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
