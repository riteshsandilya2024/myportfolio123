// src/Components/Services.js

import React from "react";
import backgroundImage from "../images/service-background.jpg"; // Import the background image

const servicesData = [
  {
    title: "Web Design",
    description:
      "I create visually appealing and user-friendly websites tailored to your business needs.",
  },
  {
    title: "Content Creation",
    description:
      "From blog posts to social media content, I help you craft compelling narratives that engage your audience.",
  },
  {
    title: "SEO Optimization",
    description:
      "I implement effective SEO strategies to improve your website's visibility and drive organic traffic.",
  },
  {
    title: "Brand Strategy",
    description:
      "I help you define your brand voice and strategy to ensure consistent messaging across all platforms.",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section id="services" style={{ position: "relative" }}>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Place behind other content
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "80%", // Adjusted for responsiveness
          maxWidth: "800px",
          padding: "4rem",
          margin: "3rem auto",
          borderRadius: "8px", // Rounded corners
          textAlign: "center",
        }}
      >
        <h2>My Services</h2>
        {servicesData.map((service, index) => (
          <div key={index} className="service" style={{ margin: "1rem 0", transition: "0.3s" }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
