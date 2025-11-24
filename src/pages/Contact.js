import React from "react";
import "../styles/Contact.css";

const Contact=()=>{
  return (
    <div className="contact-page">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtext">
        We’re here to help! Send us a message and our team will reply shortly.
      </p>

      {/* MAIN WRAPPER (CONTACT FORM + ABOUT US) */}
      <div className="contact-container">

        {/* CONTACT FORM SECTION */}
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
            required
          />

          <input
            type="tel"
            placeholder="Your Phone Number"
            className="form-input"
            required
          />

          <textarea
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>

          <button type="submit" className="btn-contact">
            Send
          </button>
        </form>

        {/* ABOUT US SECTION */}
        <div className="contact-info" id="about-section">
          <h3>About Us</h3>

          <div className="info-item">
            📱 We fix all types of smartphones with high precision.
          </div>

          <div className="info-item">
            🛠️ Skilled technicians with years of experience.
          </div>

          <div className="info-item">
            ⚡ Fast repair — most issues solved in less than 45 minutes.
          </div>

          <div className="info-item">
            🧾 Transparent pricing, no hidden fees.
          </div>

          <div className="info-item">
            📍 Aramoun, Lebanon
          </div>

        </div>
      </div>

      {/* ABOUT SNIPPET BOX (BOTTOM SECTION) */}
      <div className="about-snippet">
        <h3>Why Choose Us?</h3>
        <p>
          At FixPlus, we are committed to delivering the highest quality repair
          services with honesty, speed, and professionalism. Our team uses advanced
          tools and original parts to ensure your device works like new.
        </p>
      </div>

    </div>
  );
}
export default Contact;