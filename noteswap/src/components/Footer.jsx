import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './Footer.css';

const Footer = () => {
  return (
    <footer className="swapnote-footer">
      <div className="footer-top">
        <div className="branding">
          <div className="logo">
            <Link to="/" className="logo-gradient">NoteSwap</Link> {/* Updated to use Link */}
          </div>
          <div className="slogan">
            <p>
              NoteSwap is a student-powered platform where knowledge meets community. 
              We're transforming education by enabling students worldwide to <span className="highlight">share, discover,</span> and <span className="highlight">collaborate</span> on study materials. 
              Join our mission to make learning accessible to all.
            </p>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/faq">Pre-Sale FAQs</Link></li>
              <li><Link to="/support">Submit a Ticket</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li><Link to="/features/customization">Note Customization</Link></li>
              <li><Link to="/features/themes">Theme Options</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/resources/widgetkit">WidgetKit</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NoteSwap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;