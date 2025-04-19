import React from "react";
import "../styles/Services.css";

const service = [
  {
    title: "Frontend Development",
    description: "Building fast, responsive, and accessible web apps using React, JavaScript, and modern UI frameworks.",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on usability, consistency, and visual appeal.",
  },
  {
    title: "Web Designing",
    description: "Creating modern, aesthetic website layouts that align with brand identity and user experience best practices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          {service.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
