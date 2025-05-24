import React from "react";
import Slider from "react-slick";
import "../styles/Certificates.css";

// Replace with your actual certificate images
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/GenAI.png";
import cert3 from "../assets/accenture.png";

const certificates = [
  { title: "Career essentials in Generative AI by Microsoft & LinkedIn", image: cert1 },
  { title: "Generative AI with OpenAI", image: cert2 },
  { title: "Developer Virtual Experience Program", image: cert3},
  


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
