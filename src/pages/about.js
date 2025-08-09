import React, { useState } from 'react';
import './about.css';
import packagingmachinery from '../assets/packagingmachinery.png';
import williamafton from '../assets/williamafton.png';
import ashmoon from '../assets/ashmoon.png';
import janedoe from '../assets/janedoe.png';
import maxcroft from '../assets/maxcroft.png';
import industrialworker from '../assets/industrialworker.png';
import factorysupervisor from '../assets/factorysupervisor.png';
import owenbennet from '../assets/owenbennet.png';
import maddisongreen from '../assets/maddisongreen.png';
import shopiaanderson from '../assets/shopiaanderson.png';
import marsongracia from '../assets/marsongracia.png';
import gracetaylor from '../assets/gracetaylor.png';
import ethanwalker from '../assets/ethanwalker.png';

const AboutUs = () => {
  const teamMembers = [
    { name: 'William Afton', image: williamafton },
    { name: 'Ash Moon', image: ashmoon },
    { name: 'Jane Doe', image: janedoe },
    { name: 'Max Croft', image: maxcroft }
  ];

  const testimonials = [
    {
      name: 'Owen Bennett',
      role: 'CEO, Tech Innovations',
      text: 'Absolutely incredible service! The team went above and beyond to make our vision come to life. The project was completed on time, and their communication was top-notch. Highly recommend!',
      rating: 5,
      image: owenbennet
    },
    {
      name: 'Madison Green',
      role: 'Digital Media Manager',
      text: 'The team is very talented and professional. The project outcome was great, but I felt there had been minor setbacks during the process. Overall, I\'m very satisfied!',
      rating: 4,
      image: maddisongreen
    },
    {
      name: 'Sophia Anderson',
      role: 'COO, Smith & Partners',
      text: 'Brilliant work! They delivered exactly what was needed. Everything was well thought out, and their customer support was excellent.',
      rating: 5,
      image: shopiaanderson
    },
    {
      name: 'Mason Garcia',
      role: 'Operations Manager, Garcia Logistics',
      text: 'They transformed our ideas into something incredible. The entire process was seamless, and the end result exceeded expectations!',
      rating: 5,
      image: marsongracia
    },
    {
      name: 'Grace Taylor',
      role: 'Marketing Director',
      text: 'They did an amazing job! The designs were beautiful, and they captured our vision perfectly. Just a little delay in the final delivery, but nothing major.',
      rating: 4,
      image: gracetaylor
    },
    {
      name: 'Ethan Walker',
      role: 'Product Manager, Walker Co.',
      text: 'Fantastic experience! They provided valuable insights and ensured that every aspect of the project was perfect. I was very happy with the results.',
      rating: 5,
      image: ethanwalker
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section-about">
        <div className="hero-content-about">
          <div className="hero-image-about">
            <img src={packagingmachinery} alt="Packaging machinery" />
          </div>
          <div className="hero-text-about">
            <h1>About Us</h1>
            <p>
              PT. Lumina Packaging (Lumipack) is a trusted provider of high-quality, hygienic,
              and innovative flexible packaging solutions. Established in 2011 in Trosobo -
              Sidoarjo, East Java, we are backed by a team of professionals with over 30 years
              of industry experience and state-of-the-art technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h2>OUR VISION</h2>
              <ul>
                <li>To maintain and improve product quality</li>
                <li>To develop human resource competencies</li>
                <li>To improve service and communication for customer loyalty and satisfaction</li>
                <li>To innovate in accordance with technological developments consistently</li>
                <li>To increase effectiveness and efficiency in overall process implementation</li>
              </ul>
              <div className="vision-image">
                <img src={industrialworker} alt="Industrial worker" />
              </div>
            </div>
            
            <div className="mission-card">
              <h2>OUR MISSION</h2>
              <p>
                Our mission is to be the most trusted and respected flexible packaging company
                across national and international markets.
              </p>
              <p>
                We are committed to providing high-quality, reliable, and sustainable packaging
                solutions that meet the evolving needs of our customers. We strive to provide the
                highest quality factory services that meet and exceed international standards.
              </p>
              <p>
                Through strategic innovation, strong partnerships, and a customer-first approach,
                we strive to exceed expectations while promoting growth, accountability, and
                environmental responsibility in everything we do.
              </p>
              <div className="mission-image">
                <img src={factorysupervisor} alt="Factory supervisor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>OUR TEAM</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section-about">
        <div className="container">
          <h2>What They Say About Us</h2>
          <div className="testimonials-grid-about">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-about">
                <div className="testimonial-content-about">
                  <p className="testimonial-text-about">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author-about">
                  <div className="author-avatar-about">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info-about">
                    <h4>{testimonial.name}</h4>
                    <p className="author-role-about">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;