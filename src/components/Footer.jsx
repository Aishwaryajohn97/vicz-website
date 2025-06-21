import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h3 className="footer-title">VICZ Ltd</h3>
          <p className="footer-description">
            At VICZ Ltd, we believe technology should simplify <br />
            and empower.<br />
            From seamless integrations to reliable support,<br />
            we provide solutions that help your business thrive<br />
            in an ever-evolving digital world.
          </p>
          <p className="footer-email">📧 info@viczltd.com</p>
        </div>

        <div className="footer-links">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="legal-links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="business-hours">
          <h4>Business Hours</h4>
          <p>Mon - Fri: 9am - 6pm</p>
          <p>Sat: Closed</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 VICZ Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}















