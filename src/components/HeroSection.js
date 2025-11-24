import React from "react";
import '../styles/HeroSection.css'; 
import image1 from '../assets/image1.jpeg';
// 1st section

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h2 className="hero-title">
            Mobile Guardian <br />
            Your Phone’s Best Protector</h2>
          

          <h4 className="hero-tagline">
            Fast, transparent, and reliable mobile repair tracking.
          </h4>

          <p className="hero-support">
            Stay informed about your device’s repair progress anytime, anywhere.
          </p>

          <div className="hero-buttons">
            <a href="/track" className="btn btn-primary">
              Track Your Device
            </a>
            <a href="/SubmitRequest" className="btn btn-secondary">
              Start a Repair
            </a>
          </div>
        </div>

        {/* Hero image */}
        <img
          src={image1}
          alt="Technician repairing phone"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
