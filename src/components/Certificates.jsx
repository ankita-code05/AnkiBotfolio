import React from "react";
import Slider from "react-slick";
import "../styles/Certificates.css";

// Replace with your actual certificate images
import cert1 from "../assets/cert1.png";
// import cert2 from "../assets/cert2.png";
// import cert3 from "../assets/cert3.png";

const certificates = [
  { title: "Harvard CS50", image: cert1 },
  { title: "AWS Cloud Practitioner", image: cert1 },
  { title: "Frontend Mentor Challenges", image: cert1}
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="certificates-title">Certificates</h2>
      <div className="certificates-slider-wrapper">
        <Slider {...settings} className="certificates-slider">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-slide">
              <div className="certificate-card">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
                <p className="certificate-caption">{cert.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificates;
