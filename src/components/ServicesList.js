import React from "react";
import '../styles/ServiceList.css';

const services = [
  {
    title: "Screen Replacement",
    desc: "High-quality and fast screen repair for all major smartphone brands.",
    icon: "📱",
  },
  {
    title: "Battery Replacement",
    desc: "Get your phone’s battery replaced with reliable, long-lasting power.",
    icon: "🔋",
  },
  {
    title: "Water Damage Repair",
    desc: "Advanced cleaning and recovery for liquid-damaged devices.",
    icon: "💧",
  },
  {
    title: "Software Fixes",
    desc: "We solve software issues, crashes, and updates quickly.",
    icon: "⚙️",
  },
];

export default function ServiceList() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtext">
        We bring your devices back to life with trusted care and precision.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
