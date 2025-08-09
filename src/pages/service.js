import React from 'react';
import './service.css';
import qualitycontrol from '../assets/quality-control.png';
import drylamination from '../assets/drylamination.png';
import bagmakingmachine from '../assets/bagmakingmachine.png';
import sittingbobin from '../assets/sittingbobin.png';
import extrusionmachine from '../assets/extrusionmachine.png';
import qualitylabcontrol from '../assets/qualitylabcontrol.png';
import blownmachine from '../assets/blowmachine.png';
import rotogravure from '../assets/rotogravure.png';


const FactoryServices = () => {
  const services = [
    {
      id: 1,
      title: 'Dry Lamination Machine',
      image: drylamination,
      description: 'Powered by the latest technology, our dry lamination machine minimizes common issues in the lamination process while ensuring optimal bonding strength for each product. Lumipack’s advanced lamination technology guarantees consistent quality and strong adhesive performance.'
    },
    {
      id: 2,
      title: 'Bag Making Machine',
      image: bagmakingmachine,
      description: 'We manufacture a wide range of innovative bags and pouches, ensuring top quality at every stage. Our experienced engineers and operators carefully oversee production, guaranteeing a smooth and seamless process for our customers.'
    },
    {
      id: 3,
      title: 'Extrusion Machine',
      image: extrusionmachine,
      description: 'With high-precision machinery and experienced operators, we ensure superior lamination quality with consistent and uniform thickness'
    },
    {
      id: 4,
      title: 'Blown Film Machine',
      image: blownmachine,
      description: 'We ensure consistent product quality, tailored to meet customer needs while optimizing production efficiency and delivery time.'
    },
    {
      id: 5,
      title: 'Quality Control Lab',
      image: qualitylabcontrol,
      description: 'We prioritize product quality and invest in advanced quality control equipment. Our laboratory is equipped to measure bonding strength, tensile strength, COF, OTR, sealing, and more; ensuring that our products will meet and exceed our customers’ standards.'
    },
    {
      id: 6,
      title: 'Printing and Flexo Printing',
      image: rotogravure,
      description: 'Lumipack is equipped with a 10-color printing machine designed for the highest accuracy. Operated by experts with over 30 years of experience, we can handle highly complex designs with precision. Our advanced register control ensures superior printing quality, delivering exceptional results every time.'
    },
    {
      id: 7,
      title: 'Slitting Machine',
      image: sittingbobin,
      description: 'We prioritize hygiene in every product we produce. Our slitting process takes place in a clean-room environment with positive air pressure to prevent microbial contamination, ensuring the highest quality of standards. '
    },
  ];

  return (
    <div className="factory-services">
      <section className="services-section">
        <div className="container">
          <header className="page-header">
            <h1 className="main-title">Factory Services</h1>
          </header>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-statement">
          <div className="quality-content">
            <div className="quality-text">
              <h2>Quality Statement</h2>
              <h3>A Commitment to Quality <br />from PT. Lumina Packaging</h3>
              <p>
                At Lumipack, continuous development and innovation are part of our 
                culture. We strive to create new designs and material compositions to 
                offer value-added products to our customers.
              </p>
              <p>
                We believe that our products must exceed customer standards to 
                ensure satisfaction. To achieve this, we continuously enhance our 
                human resources, upgrade our production capabilities, and invest 
                heavily in R&D. Additionally, we maintain strong relationships with both 
                domestic and international vendors to source the best materials 
                available.
              </p>
            </div>
            <div className="quality-image">
              <img src={qualitycontrol} alt="Quality Control Worker in Factory" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryServices;