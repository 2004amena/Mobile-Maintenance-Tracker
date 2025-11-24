import React from "react";
import "../styles/HowItWorks.css";

const steps = [
  {
    step: "1",
    title: "Submit Your Repair Request",
    desc: "Tell us about your device issue in just a few clicks.",
  },
  {
    step: "2",
    title: "We Pick Up or Receive It",
    desc: "Drop it off or let us collect it from your location.",
  },
  {
    step: "3",
    title: "Track and Receive Updates",
    desc: "Monitor every step of the repair through Mobile Guardian.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtext">
        Simple, transparent, and quick repair process to keep you informed.
      </p>

      <div className="steps-container">
        {steps.map((item, index) => (
          <div className="step-box" key={index}>
            <div className="step-number">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
