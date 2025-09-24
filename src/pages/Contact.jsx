import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission (replace with actual form handling)
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">Let's work together or just say hello!</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="info-items">
              <div className="info-item">
                <FiMail className="info-icon" />
                <div className="info-details">
                  <h4>Email</h4>
                  <p>joannamjy@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Melbourne, Australia</p>
                </div>
              </div>
              
              <div className="info-item">
                <FiPhone className="info-icon" />
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>+61 4XX XXX XXX</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/joannajym" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/joannamjy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiLinkedin />
                </a>
                <a href="mailto:joannamjy@gmail.com" className="social-link">
                  <FiMail />
                </a>
                <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiFileText />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Send me a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-message error">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;