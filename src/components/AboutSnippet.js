//Who we are? section
import React from "react";
import '../styles/AboutSnippet.css';
import image2 from '../assets/image2.jpeg';

const AboutSnippet = () => {
  return (
    <section className="about-snippet">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-tagline">
            Your trusted partner in mobile care and maintenance.
          </p>
          <p className="about-body">
            At <strong>Mobile Guardian</strong>, we believe your device deserves
            the best. Our mission is to make repair services transparent, fast,
            and worry-free. With real-time tracking and expert technicians, we
            ensure your phone is always in safe hands.
          </p>

          <ul className="about-highlights">
            <li>🔧 Certified technician</li>
            <li>⏱ Real-time repair tracking</li>
            <li>🚚 Delivery services</li>
            <li>🧩 Quality parts guaranteed</li>
          </ul>

          <a href="/contact" className="btn btn-primary about-btn">
            Learn More
          </a>
        </div>

        {/* Image Section */}
        <img
          src={image2}
          alt="Mobile Guardian team working"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default AboutSnippet;