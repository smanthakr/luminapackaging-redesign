import React, { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import cs from '../assets/cs.png';
import chat from '../assets/chat-person.png';

import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    otherTopic: ''
  });
  
  const handleChatClick = () => {
    navigate('/chat');
  };

  const topics = [
    'General Inquiry',
    'Product Information',
    'Technical Support',
    'Partnership',
    'Job Opportunities',
    'Complaint',
    'Other'
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      topic: selectedTopic === 'other' ? formData.otherTopic : selectedTopic,
      email: formData.email,
      message: formData.message
    });
    alert('Message sent successfully!');
  };



  return (
    <div className="contact-us-page">
      <div className="contact-container">
        {/* Left Section - Contact Information */}
        <div className="contact-info-section">
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>info@ptlumipack.com</p>
                <p>rekrutmen@ptlumipack.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+62 31 8971 777</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Jl. Raya Trosobo No. 1, Kec. Taman, Sidoarjo, Jawa Timur 61257</p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <img 
              src={cs} 
              alt="cs" 
              className="map-image"
            />
            <div className="chat-person-container">
              <div className="chat-content-wrapper">
                <img 
                  src={chat} 
                  alt="Chat with us" 
                  className="chat-person"
                />
                <div className="chat-bubble">
                  <h4>Welcome to our website!</h4>
                  <p>Nice to meet you! If you have any question about our services, feel free to contact us.</p>
                </div>
              </div>
              <button className="chat-now-button" onClick={handleChatClick}>
                Chat With Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h1>Contact Us</h1>
            <h2 className="form-subtitle">-We're here to help</h2>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select a topic</label>
              <div className="topic-grid">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`topic-button ${selectedTopic === topic ? 'selected' : ''}`}
                    onClick={() => handleTopicSelect(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>
              {selectedTopic === 'Other' && (
                <div className="form-group" style={{ marginTop: '10px' }}>
                  <input
                    type="text"
                    name="otherTopic"
                    value={formData.otherTopic}
                    onChange={handleInputChange}
                    placeholder="Please specify..."
                    className="form-input"
                    required
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Specify</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your inquiry in detail..."
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;