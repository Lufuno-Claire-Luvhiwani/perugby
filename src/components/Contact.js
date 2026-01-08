import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Jubilee Field</p>
              <p>Prince Edward School</p>
              <p>Harare, Zimbabwe</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:admin@perugby.co.zw" className="contact-email-link">
                  admin@perugby.co.zw
                </a>
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">📱</div>
              <h3>Follow Us</h3>
              <a 
                href="https://www.facebook.com/Tigers1898/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                Facebook - Tigers1898
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
              {submitted && (
                <p className="form-success">Thank you for your message. We'll get back to you soon!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

