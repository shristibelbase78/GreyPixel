import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About NoteSwap</h2>
          <p className="about-description">
            We're revolutionizing education through shared knowledge. At NoteSwap, we believe that 
            <span className="highlight"> collective learning</span> can transform academic success. 
            Our platform connects students worldwide to create the ultimate study resource hub.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Study Materials Shared</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">User Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">35+</h3>
              <p className="stat-label">Academic Subjects Covered</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img src="https://i.pinimg.com/1200x/b4/86/57/b48657fea8e8f784cf220514fb08246a.jpg" alt="Students collaborating on NoteSwap" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;