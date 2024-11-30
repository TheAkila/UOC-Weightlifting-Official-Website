import React from 'react';
import { images } from '../../constants'; 
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us-container">
    <div className="about-us-info">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-description">
        We are the champions, the dedicated weightlifters of UOC, pushing boundaries and lifting to new heights.
        Our team is built on hard work, perseverance, and strength. Join us and become a part of something special.
      </p>
      <button className="explore-btn">Explore Our Journey</button>
    </div>
    <div className="about-us-img">
      <img src={images.aboutus} alt="Our Team" />
    </div>
  </div>
);

export default AboutUs;
