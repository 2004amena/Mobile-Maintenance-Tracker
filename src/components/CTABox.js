import React from "react";
import "../styles/CTABox.css";

export default function CTABox() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Fix Your Phone?</h2>
        <p>Be one of those who trust Mobile Guardian for fast and transparent service.</p>
        <div className="cta-buttons">
          <a href="/SubmitRequest" className="btn btn-primary">
            Start a Repair
          </a>
          <a href="/Track" className="btn btn-secondary">
            Track Your Device
          </a>
        </div>
      </div>
    </section>
  );
}
