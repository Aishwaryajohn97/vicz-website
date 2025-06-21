import React from "react";
import {
  FaCloud,
  FaLaptopCode,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <div className="about-section">
      {/* Floating icons */}
      <div className="floating-icons">
        <FaCloud className="icon it-icon icon1" />
        <FaLaptopCode className="icon it-icon icon2" />
        <FaNetworkWired className="icon it-icon icon3" />
        <FaServer className="icon it-icon icon4" />
        <FaShieldAlt className="icon it-icon icon5" />
        <FaMobileAlt className="icon it-icon icon6" />
        <FaDatabase className="icon it-icon icon7" />
      </div>

      <div className="about-content">
        <h1>About VICZ Ltd</h1>
        <p>
          VICZ Ltd is committed to delivering innovative technology solutions
          tailored to the unique needs of businesses worldwide. With a strong
          emphasis on collaboration, integrity, and cutting-edge expertise, we
          empower organizations to transform digitally and achieve sustainable
          growth.
        </p>
        <p>
          Our team comprises seasoned professionals in software development,
          cloud computing, cybersecurity, data analytics, and IT consulting. We
          pride ourselves on building long-lasting partnerships with our clients,
          fostering success through customized IT services and strategic
          innovation.
        </p>
        <p>
          At VICZ Ltd, your vision is our mission. We continuously evolve to meet
          the dynamic landscape of technology, ensuring your business stays ahead
          of the curve.
        </p>
      </div>
    </div>
  );
}







