// Footer.js
import React from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <Clock className="icon" />
              <div>
                <h3 className="contact-title">ONLINE HOURS</h3>
                <p className="contact-text">08:00 - 17:00</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="icon" />
              <div>
                <p className="contact-text">(+62)31897177</p>
              </div>
            </div>
            
            <div className="contact-item">
              <MapPin className="icon" />
              <div>
                <p className="contact-text">Sidoarjo, Jawa Timur</p>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="map-section">
            <div className="map-container">
              <div className="map-content">
                {/* Map Background */}
                <div className="map-background">
                  {/* Map Grid Lines */}
                  <svg className="map-grid">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                  </svg>
                </div>
                
                {/* Location Labels */}
                <div className="map-labels">
                  <div className="label label-top-left">KRIAN</div>
                  <div className="label label-top-right-1">WARU</div>
                  <div className="label label-bottom-left">GEDANGAN</div>
                  <div className="label label-top-right-2">TAMAN</div>
                  <div className="label label-bottom-right-1">BUDURAN</div>
                  <div className="label label-bottom-right-2">CANDI</div>
                  <div className="label label-middle-left">PORONG</div>
                  <div className="label label-middle-right">JABON</div>
                  
                  {/* Roads */}
                  <div className="road road-horizontal-1"></div>
                  <div className="road road-horizontal-2"></div>
                  <div className="road road-vertical"></div>
                  
                  {/* Main Location Marker */}
                  <div className="marker marker-main">
                    <div className="marker-dot marker-red"></div>
                    <span className="marker-label">Sidoarjo</span>
                  </div>
                  
                  {/* Secondary Marker */}
                  <div className="marker marker-secondary">
                    <div className="marker-dot marker-green"></div>
                    <span className="marker-label">Surabaya</span>
                  </div>
                </div>
                
                {/* River/Water Feature */}
                <div className="water-feature water-1"></div>
                <div className="water-feature water-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;