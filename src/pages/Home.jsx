import React from 'react';
import {
  FaCloud,
  FaLaptopCode,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase
} from 'react-icons/fa';
import './Home.css';

export default function Home() {
  return (
    <div className="hero-section home">
      <div className="floating-icons">
        <FaCloud className="icon it-icon icon1" />
        <FaLaptopCode className="icon it-icon icon2" />
        <FaNetworkWired className="icon it-icon icon3" />
        <FaServer className="icon it-icon icon4" />
        <FaShieldAlt className="icon it-icon icon5" />
        <FaMobileAlt className="icon it-icon icon6" />
        <FaDatabase className="icon it-icon icon7" />
      </div>

      <div className="hero-content">
        <p className="hero-tagline">Technology & IT Solutions</p>
        <h1 className="hero-title">
          Empowering Businesses<br />
          with Smart IT Services
        </h1>
        <p className="hero-desc">
          VICZ Ltd delivers tailored technology and consulting services to power innovation,
          efficiency, and growth for businesses around the world.
        </p>
        <a href="/services" className="hero-btn">Explore Our Services</a>
      </div>
    </div>
  );
}
















