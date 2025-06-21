import React from "react";
import {
  FaCloud,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaRobot,
  FaMobileAlt,
  FaNetworkWired,
  FaServer,
  FaHeadset,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    title: "Cloud Architecture & Migration",
    icon: <FaCloud />,
    description:
      "Designing scalable cloud infrastructures and seamlessly migrating your existing systems to the cloud with minimal downtime.",
  },
  {
    title: "DevOps & CI/CD Automation",
    icon: <FaCogs />,
    description:
      "Implementing continuous integration and delivery pipelines to accelerate software releases with reliability.",
  },
  {
    title: "Cybersecurity Strategy & Ops",
    icon: <FaShieldAlt />,
    description:
      "Building robust cybersecurity frameworks to safeguard your assets and ensure compliance with industry standards.",
  },
  {
    title: "Data Engineering & Analytics",
    icon: <FaChartLine />,
    description:
      "Crafting data pipelines and analytics solutions that provide actionable business insights.",
  },
  {
    title: "AI & Machine Learning Integration",
    icon: <FaRobot />,
    description:
      "Leveraging artificial intelligence to automate processes and enhance decision-making capabilities.",
  },
  {
    title: "Digital Transformation Consulting",
    icon: <FaMobileAlt />,
    description:
      "Guiding your enterprise through digital modernization to unlock new growth opportunities.",
  },
  {
    title: "Mobile & Web Applications",
    icon: <FaNetworkWired />,
    description:
      "Developing responsive and high-performance applications tailored to your business needs.",
  },
  {
    title: "Infrastructure Management",
    icon: <FaServer />,
    description:
      "Proactively managing IT infrastructure to ensure maximum uptime and efficiency.",
  },
  {
    title: "IT Support & Maintenance",
    icon: <FaHeadset />,
    description:
      "Offering 24/7 technical support and maintenance to keep your operations smooth and uninterrupted.",
  },
  {
    title: "Project & Product Management",
    icon: <FaProjectDiagram />,
    description:
      "Providing expert leadership to deliver projects on time, within scope, and budget.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="floating-icons">
        {/* Use some icons related to services */}
        <FaCloud className="icon it-icon icon1" />
        <FaCogs className="icon it-icon icon2" />
        <FaShieldAlt className="icon it-icon icon3" />
        <FaRobot className="icon it-icon icon4" />
        <FaServer className="icon it-icon icon5" />
      </div>

      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          VICZ Ltd offers a wide range of IT and management services to support
          your digital growth:
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ title, icon, description }, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}






