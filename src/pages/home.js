import React from 'react';
import './home.css';
import packaging from '../assets/packaging.png';
import aboutme from '../assets/aboutme.png';
import whychooseus from '../assets/whychooseus.png';
import lidcup from '../assets/lidcup.png';
import flatbottom from '../assets/flatbottom.png';
import roll from '../assets/roll.png';  

function Home() {
  return (
    <div className="home">
      {/* Section 1: Hero Section */}
      <section className="hero-section-home">
        <div className="hero-content-home">
          <div className="content-home">
            <h1 className="title">Lumina<br />Packaging</h1>
            <p className="subtitle">Precision in Packaging,<br />Excellence in Quality.</p>
            <p className="description">Your trusted partner in the flexible packaging industry.</p>
            <button className="contact-button">Contact</button>
          </div>
          <div className="image-container-home">
            <img src={packaging} alt="Packaging machine" />
          </div>
        </div>
      </section>

      {/* Section 2: About Me */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-image-container">
            <img src={aboutme} alt="Warehouse operations" />
          </div>
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              PT. Lumina Packaging (Lumipack) is a trusted provider of high-quality, 
              hygienic, and innovative flexible packaging solutions. Established in 2011 in 
              Trosobo - Sidoarjo, East Java, we are backed by a team of professionals with 
              over 30 years of industry experience and state-of-the-art technology.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2 className="why-choose-title">Why<br />Choose<br />Us?</h2>
            <p className="why-choose-description">
              With over 30 years of expertise, Lumipack delivers high-quality, hygienic, 
              and reliable packaging using advanced technology. We ensure consistency, 
              on-time delivery, and customer satisfaction, making us a reliable industry 
              partner.
            </p>
          </div>
          <div className="why-choose-image">
            <img src={whychooseus} alt="Team collaboration" />
          </div>
        </div>
      </section>

      {/* Section 4: Top Products */}
      <section className="products-section-home">
        <div className="products-content-home">
          <h2 className="products-title-home">Top Products</h2>
          <div className="products-grid-home">
            <div className="product-card-home">
              <div className="product-image-home">
                <div className="heart-icon">♡</div>
                <div className="product-illustration">
                  {/* Lid Cup illustration */}
                  <img src={lidcup} alt="Lid Cup" />
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Lid Cup</h3>
                <p className="product-price">$110.00</p>
              </div>
            </div>

            <div className="product-card-home">
              <div className="product-image-home">
                <div className="heart-icon">♡</div>
                <div className="product-illustration">
                  {/* Flat Bottom illustration */}
                  <img src={flatbottom} alt="Flat Bottom" />
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Flat Bottom</h3>
                <p className="product-price">$110.00</p>
              </div>
            </div>

            <div className="product-card-home">
              <div className="product-image-home">
                <div className="heart-icon">♡</div>
                <div className="product-illustration">
                  {/* Roll illustration */}
                  <img src={roll} alt="Roll" />
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Roll</h3>
                <p className="product-price">$110.00</p>
              </div>
            </div>
          </div>
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Home;