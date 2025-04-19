import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
//import { FaLinkedin } from "react-icons/fa";
import linkedin from "../assets/linkedin.svg";
import Git from "../assets/Git.svg"



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 Ankita. All Rights Reserved.</p>
        <div className="social-icons">
          <a
            href="https://github.com/ankita-code05"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={Git} alt="" width={30}/>
            
          </a>
          <a
            href="https://www.linkedin.com/in/ankitatiwari5/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={linkedin} alt="Linkedin " width={30}  />
            {/* //<FaLinkedin size={20} /> */}
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
