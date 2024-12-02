import React from 'react';
import { images } from '../../constants'; 
import './AboutUs.css';


const AboutUs = () => (
  <div className="about-us-container">
    {/* About Us Section */}
    <div className="about-us-section">
      <h2 className="section-title">About Us</h2>
      <p className="section-description">
        We are the champions, the dedicated weightlifters of UOC, pushing boundaries and lifting to new heights. 
        Our team is built on hard work, perseverance, and strength. Join us and become a part of something special.
      </p>
      <button className="explore-button">Explore Our Journey</button>
    </div>

    {/* About Us Image */}
    <div className="about-us-image">
      <img src={images.aboutus} alt="Our Team" />
    </div>

    {/* Our Mission Section */}
    <div className="mission-section">
      <h3 className="mission-title">Our Mission</h3>
      <p className="mission-description">
        Our mission is to build a community of passionate athletes who push the boundaries of strength and fitness. 
        With dedication, discipline, and teamwork, we aim to foster growth and excellence in every individual. 
        Together, we will achieve greatness.
      </p>
    </div>

    {/* Team Members Section */}
    <div className="team-section">
      <h3 className="team-title">Meet Our Team</h3>
      <div className="team-grid">
        <div className="team-member">
          <img src={images.team1} alt="Team Member 1" />
          <h4 className="member-name">John Doe</h4>
          <p className="member-role">Captain & Trainer</p>
        </div>
        <div className="team-member">
          <img src={images.team2} alt="Team Member 2" />
          <h4 className="member-name">Jane Smith</h4>
          <p className="member-role">Strength Coach</p>
        </div>
        <div className="team-member">
          <img src={images.team3} alt="Team Member 3" />
          <h4 className="member-name">Michael Lee</h4>
          <p className="member-role">Athlete</p>
        </div>
      </div>
    </div>

    {/* Achievements Section */}
    <div className="achievements-section">
      <h3 className="achievements-title">Our Achievements</h3>
      <div className="achievements-list">
        <div className="achievement-item">
          <h4 className="achievement-title">SriLanka University Games Weightlifting Championship 2023</h4>
          <p className="achievement-description">Our Mens team secured the first place in the National Weightlifting Championship, showcasing our commitment to excellence and strength.</p>
        </div>
        <div className="achievement-item">
          <h4 className="achievement-title">SriLanka Novices Weightlifting Championship 2023</h4>
          <p className="achievement-description">Our Mens team secured the second place in the National Weightlifting Championship.</p>
        </div>
        {/* Add more achievements as needed */}
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="cta-section">
      <h3 className="cta-title">Join Us Today!</h3>
      <p className="cta-description">Become part of a winning team and push yourself to new heights. Whether you're an athlete or a supporter, your journey begins here.</p>
      <button className="cta-button">Join the Team</button>
    </div>
  </div>
);

export default AboutUs;
