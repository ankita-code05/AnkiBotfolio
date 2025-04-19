import React from "react";
import "../styles/Header.css";
import { CgArrowDownO } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Ankita's Portfolio</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#hero-section" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            <li className="nav-item resume-item">
              <a href="#resume" className="nav-link resume-link">
                <CgArrowDownO size={24} />
                <span className="resume-text">Download Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
