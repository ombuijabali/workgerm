import React from 'react';
import { Link } from 'react-router-dom'; // Importing React Router for navigation
import './Services.css'; // Custom styles for Services page
import processImage from './images/5.png'; // Replace with the correct path for the image
import { 
  FaHeadset, FaFileAlt, FaPaperPlane, FaCheckCircle, FaShieldAlt, FaClock 
} from 'react-icons/fa'; // Importing icons for better visual representation

const Services = () => {
  return (
    <div className="services-page">
      
      {/* Hero Section with Image */}
      <section className="image-section">
        <div className="image-container">
          <img src={processImage} alt="Our Process" className="process-image" />
        </div>
      </section>

      {/* Detailed Explanation of the Process */}
      <section className="process-section">
        <h1 className="section-title">How the Process Works</h1>
        <p className="section-description">
          Our streamlined approach ensures a smooth and stress-free application process, 
          from consultation to the final decision. Here's how we guide you through each 
          step to achieve success.
        </p>

        {/* CTA Button to Contact Page */}
        <div className="cta-button">
          <Link to="/contact">
            <button className="view-services-btn">Enquire Now</button>
          </Link>
        </div>

        {/* Step-by-Step Process Explanation */}
        <div className="process-steps">
          <div className="step">
            <FaHeadset className="step-icon" />
            <h3>Initial Consultation</h3>
            <p>
              Our journey begins with an in-depth consultation where we understand 
              your unique needs, whether you're an individual looking to secure a 
              permit or a corporate entity managing employee documentation.
            </p>
            <a href="#learn-more">Learn more</a>
          </div>

          <div className="step">
            <FaFileAlt className="step-icon" />
            <h3>Document Proofing</h3>
            <p>
              We meticulously review your documents to ensure they meet the 
              stringent regulatory requirements, minimizing delays and rejections.
            </p>
          </div>

          <div className="step">
            <FaPaperPlane className="step-icon" />
            <h3>Document Submission</h3>
            <p>
              After ensuring all your paperwork is in order, we handle the 
              submission process, ensuring timely delivery to the relevant 
              governmental bodies.
            </p>
          </div>

          <div className="step">
            <FaCheckCircle className="step-icon" />
            <h3>Information Review</h3>
            <p>
              Our team continuously monitors the progress of your application, 
              making sure that it is being reviewed appropriately, and addressing 
              any additional requirements as they arise.
            </p>
          </div>

          <div className="step">
            <FaShieldAlt className="step-icon" />
            <h3>Process Monitoring</h3>
            <p>
              Stay informed with real-time updates. We provide detailed status 
              reports, so you are never left in the dark during the approval process.
            </p>
          </div>

          <div className="step">
            <FaClock className="step-icon" />
            <h3>Final Decision</h3>
            <p>
              Once a decision is made by the authorities, we immediately notify you 
              and guide you through any subsequent steps, such as finalizing your 
              relocation or employment details.
            </p>
          </div>
        </div>
      </section>

      {/* Our Range of Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          We provide a comprehensive range of services to cater to all your 
          employment and immigration needs. Whether you're an individual seeking 
          a permit or a company ensuring compliance, we are here to help.
        </p>

        <div className="services-cards">
          <div className="service-card">
            <h3>Critical Skills Employment Permits</h3>
            <p>
              We assist highly skilled professionals in securing the Critical Skills 
              Employment Permits necessary to work in key industries, ensuring you 
              can continue to contribute to the growth of your sector.
            </p>
          </div>
          
          <div className="service-card">
            <h3>General Employment Permits</h3>
            <p>
              Our team offers guidance for obtaining General Employment Permits, 
              helping you meet the requirements for employment across various industries.
            </p>
          </div>

          <div className="service-card">
            <h3>Change of Status Applications</h3>
            <p>
              Whether you're looking to transition from one immigration status 
              to another, we ensure that all necessary documentation is handled 
              efficiently to avoid unnecessary delays.
            </p>
          </div>

          <div className="service-card">
            <h3>Family Reunification Applications</h3>
            <p>
              We help reunite families through our specialized family reunification 
              services, assisting work permit holders in bringing their loved ones to join them.
            </p>
          </div>

          <div className="service-card">
            <h3>Stamps and Permissions Explained</h3>
            <p>
              Our experts offer a detailed breakdown of various stamps and permissions 
              available for workers, residents, and companies, ensuring you are fully 
              informed before making decisions.
            </p>
          </div>

          <div className="service-card">
            <h3>Company & Business Audits</h3>
            <p>
              We provide comprehensive audits to ensure your company complies with 
              labor and employment regulations, helping avoid legal complications 
              and promoting a productive work environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
