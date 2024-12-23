import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // Track the form submission status

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use emailjs to send the email
    emailjs.sendForm('service_6h2bma7', 'template_58biy6p', e.target, '_A6vcvoq9kXznenxo')
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          console.log(result.text); // Log success message
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          }); // Reset form after successful submission
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          console.error(error.text); // Log error message
        }
      );
  };

  return (
    <div className="contact-us-page">
      {/* Contact Us Header */}
      <div className="contact-us-header">
        <h1>Contact UOCWL</h1>
      </div>

      {/* Contact Form and Contact Info Sections in a Row */}
      <div className="contact-sections">
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p>We welcome any questions or queries you may have about our team, the sport of weight lifting, or opportunities to get involved in our programmes and initiatives. Please use the form below to submit your query, remembering to fill in all of your details so we can get back in touch</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

          {/* Show submission status */}
          {status && <p className="form-status">{status}</p>}
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <ul>
              <li>
                <FaPhoneAlt className="info-icon" />
                <p>+94764678229</p>
              </li>
              <li>
                <FaEnvelope className="info-icon" />
                <p>uocweightlifting@gmail.com</p>
              </li>
              <li>
                <FaMapMarkerAlt className="info-icon" />
                <p>University of Colombo</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
