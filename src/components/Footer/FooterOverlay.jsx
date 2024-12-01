// Footer.jsx
import React from 'react';
import './FooterOverlay.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About UOCWL</h3>
          <p>
            The University of Colombo Weightlifting Club (UOCWL) is dedicated to fostering the
            growth and development of weightlifting athletes. Our club supports athletes of all levels,
            from beginners to competitive lifters, with coaching, training facilities, and more.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +764678229</li>
            <li>Email: uocweightlifting@gmail.com</li>
            <li>Address: University of Colombo, Sri Lanka</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://web.facebook.com/uocweightlifting" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@TeamUOCWeightlifting" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://www.instagram.com/uoc_weightlifting" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@weightlifting_uoc" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UOC Weightlifting. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
