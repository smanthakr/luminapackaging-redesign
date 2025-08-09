import React, { useState } from 'react';
import { Star, Package, Shield, Users, Award, MapPin, Phone, Clock } from 'lucide-react';
import './product.css';
import rid1 from '../assets/rid1.png';
import rid2 from '../assets/rid2.png';
import rid3 from '../assets/rid3.png';
import rid4 from '../assets/rid4.png';
import flatbottomzipper from '../assets/flatbottomzipper.png';
import flatbottoma from '../assets/flatbottoma.png';
import regularflatbottom from '../assets/regularflatbottom.png';
import extrasafepacking from '../assets/extrasafepacking.png';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All Products');

  const testimonials = [
    {
      name: "Bajadar Singh",
      date: "a day ago",
      rating: 5,
      text: "Worked here for a few months, friendly co-workers and amazing environment.",
      avatar: "BS"
    },
    {
      name: "Gautam Kanta",
      date: "a year ago", 
      rating: 5,
      text: "Communicative team and high quality products.",
      avatar: "GK"
    },
    {
      name: "Deepak Kaila",
      date: "a year ago",
      rating: 5,
      text: "There's a reason why they're certified. They always serve the best products for us. My business experience has never been better with them.",
      avatar: "DK"
    },
    {
      name: "Mina Sharma",
      date: "a year ago",
      rating: 4,
      text: "Amazing customer service! Always satisfied with the delivery of my orders. Workable for customers here. They take care of our requirements.",
      avatar: "MS"
    },
    {
      name: "Jerome Bell",
      date: "2 years ago",
      rating: 5,
      text: "Exceptional service! The team is amazing, prompt and reliable to provide promptness, ensures their food packaging products and reliable service. Highly recommended for anyone looking for quality.",
      avatar: "JB"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Flat Bottom with Pocket Type Zipper",
      description: "Secure and resealable — ideal for freshness. This pouch features a convenient pocket zipper for easy access and airtight storage.",
      price: "$699.00",
      image: flatbottomzipper
    },
    {
      id: 2,
      name: "Flat Bottom with Zipper", 
      description: "Minimalist and efficient. Combines modern aesthetics with reliable materials for simple, clean packaging.",
      price: "$503.10",
      image: flatbottoma
    },
    {
      id: 3,
      name: "Regular Flat Bottom",
      description: "Flexible and dependable. This classic flat-bottom design suits a wide range of products with cost-effective durability.",
      price: "$113.89",
      image: regularflatbottom
    },
    {
      id: 4,
      name: "Extra Safe Packing",
      description: "Maximum protection, minimal hassle. Extra protection for your packaging products.",
      price: "$237.00",
      image: extrasafepacking
    }
  ];

  const tabs = ['All Products', 'Flat Bottom', 'Stand Pouch', 'Three Side Seal', 'Center Seal', 'Gusset Center Seal', 'Lid Cup', 'Roll'];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`star ${i < rating ? 'star-filled' : 'star-empty'}`} />
    ));
  };

  return (
    <div className="products-page">
      {/* Section 1: Why Our Products */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src={require('../assets/products.png')}
                  alt="Packaging products"
                  className="hero-img"
                />
              </div>
            </div>
            <div className="hero-content">
              <h1 className="hero-title">
                Why Our Products?
              </h1>
              <p className="hero-description">
                PT. Lumina Packaging (Lumipack) is a trusted provider of high-quality, hygienic, 
                and innovative flexible packaging solutions. Established in 2011 in Trosobo - 
                Sidoarjo, East Java, we are backed by a team of professionals with over 30 years 
                of industry experience and state-of-the-art technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Guaranteed Quality & Testimonials */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-header">
            <h2 className="quality-title">Guaranteed Quality</h2>
            <p className="quality-description">
              PT. Lumina Packaging is trusted to provide high-quality, hygienic, 
              flexible packaging solutions. We ensure the highest standards with 
              rigorous quality control processes and continuous innovation to meet your specific needs.
            </p>
          </div>
          
          <div className="quality-grid">
            {/* Company Info Card */}
            <div className="quality-card">
              <div className="company-info">
                <div className="rid-gallery">
                  <img src={rid1} alt="RID 1" className="rid-image" />
                  <img src={rid2} alt="RID 2" className="rid-image" />
                  <img src={rid3} alt="RID 3" className="rid-image" />
                  <img src={rid4} alt="RID 4" className="rid-image" />
                </div>
                <h3 className="company-name">PT. Lumina Packaging</h3>
                <div className="rating-info">
                  {renderStars(5)}
                  <span className="review-count">(24 reviews)</span>
                </div>
                <div className="company-details">
                  <div className="detail-item">
                    <MapPin className="detail-icon" />
                    <span>Jl. Raya Trosobo No.Km.8.5, Taman, Trosobo, Taman, Sidoarjo Regency, East Java 61257</span>
                  </div>
                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span>Hours: 08:00 am - 04:00 pm</span>
                  </div>
                  <div className="detail-item">
                    <Phone className="detail-icon" />
                    <span>(031) 8531722</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials-section">
              <div className="testimonials-header">
                <div>
                  <h3 className="testimonials-title">Customer Reviews</h3>
                  <div className="rating-header">
                    <div className="rating-stars">
                      {renderStars(5)}
                    </div>
                    <span className="rating-score">4.6</span>
                    <span className="rating-source">Google Rating</span>
                  </div>
                </div>
              </div>

              <div className="testimonials-list">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="testimonial-avatar">
                        {testimonial.avatar}
                      </div>
                      <div className="testimonial-body">
                        <div className="testimonial-header">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <span className="testimonial-date">{testimonial.date}</span>
                        </div>
                        <div className="testimonial-rating">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Products */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <span className="products-label">Products</span>
            <h2 className="products-title">Our Products</h2>
            <p className="products-subtitle">Try flexible packaging—freshness & brand boost. Start now!</p>
          </div>

          {/* Product Tabs */}
          <div className="product-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? 'tab-active' : 'tab-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-overlay" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">
                    {product.name}
                  </h3>
                  <p className="product-description">
                    {product.description}
                  </p>
                  <div className="divider" />
                  <div className="product-price">
                    {product.price}
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

export default Products;