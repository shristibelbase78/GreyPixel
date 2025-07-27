import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="compact-contact-container">
      <div className="compact-contact-card">
        <h1 className="compact-title">Contact Us</h1>
        
        <div className="compact-columns">
          {/* Contact Form */}
          <div className="compact-form-section">
            <div className="form-header">
              <FaPaperPlane className="header-icon" />
              <h2>Send Message</h2>
            </div>
            
            <form className="ultra-compact-form">
              <div className="compact-input-row">
                <div className="compact-input-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="compact-input-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              
              <div className="compact-input-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              
              <div className="compact-input-group">
                <label>Phone</label>
                <div className="compact-phone-input">
                  <select>
                    <option>+971</option>
                  </select>
                  <input type="tel" placeholder="Phone number" />
                </div>
              </div>
              
              <div className="compact-input-group">
                <label>Message</label>
                <textarea placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" className="compact-submit-btn">
                <FaPaperPlane className="btn-icon" />
                Send
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="compact-info-section">
            <h2 className="compact-info-title">Support</h2>
            
            <div className="compact-contact-methods">
              <div className="compact-method">
                <div className="method-icon phone">
                  <FaPhone />
                </div>
                <div>
                  <h3>Call</h3>
                  <p>+971 56 498 3456</p>
                </div>
              </div>
              
              <div className="compact-method">
                <div className="method-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+971 55 343 6433</p>
                </div>
              </div>
              
              <div className="compact-method">
                <div className="method-icon email">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>support@zalomi.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;