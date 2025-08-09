// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaGlobe, FaBars, FaTimes, FaClock } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content-nav">
            <div className="contact-info-container">
              <div className="contact-info-nav">
                <div className="info-item-nav">
                  <FaClock className="info-icon-nav" />
                  <div className="time-wrapper">
                    <span>ONLINE HOURS</span>
                    <span>08.00 - 17.00</span>
                  </div>
                </div>
                <div className="info-item-nav">
                  <FaPhone className="info-icon-nav" />
                  <a href="tel:+62318971777">(+62) 318 971 777</a>
                </div>
                <div className="info-item-nav">
                  <FaMapMarkerAlt className="info-icon-nav" />
                  <span>Sidoarjo, Jawa Timur</span>
                </div>
              </div>
            </div>
            <div className="language-selector">
              <FaGlobe className="globe-icon" />
              <span>LANGUAGE</span>
              <select>
                <option value="en">EN</option>
                <option value="id">ID</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="PT. GAS Logo" />
            </div>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
              <Link to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</Link>
              <Link to="/about" className={({ isActive }) => isActive ? 'active' : ''}>ABOUT US</Link>
              <Link to="/service" className={({ isActive }) => isActive ? 'active' : ''}>SERVICE</Link>
              <Link to="/products" className={({ isActive }) => isActive ? 'active' : ''}>PRODUCT</Link>
              <Link to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</Link>
            </div>

            <div className="mobile-menu-btn" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
