// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Footer Widgets Column 1 */}
          <div className="col-md-4">
            <h5>Germ Waves</h5>
            <p>
              We specialize in work permit services for individuals and businesses. Our dedicated team provides expert guidance to navigate the complexities of work permit applications, ensuring a smooth and efficient process. We are committed to delivering personalized solutions that cater to your specific requirements
            </p>
            <br />
            <br />
            <p>&copy; 2024 Germ Waves. All rights reserved.</p>
          </div>

          {/* Footer Widgets Column 2 */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <br />
            <a href="#top" className="back-to-top-link"><strong>Back to Top</strong></a>
          </div>

          {/* Footer Widgets Column 3 */}
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong><FontAwesomeIcon icon={faMapMarkerAlt} />  Neuer Jungfernstieg 46</strong><br />
                Freistaat Bayern<br />
                84304<br />
                Hamburg, Germany
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:germwaves@gmail.com" style={{color: 'orange'}}>germwaves@gmail.com</a></strong>
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faPhone} /> <a href="tel:+254706881849" style={{color: 'orange'}}>08721 91 44 30</a></strong>
              </li>
            </ul>

            <div className="social-icons">         
              <a href="https://x.com/i785" className="mr-3" style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/-6b1/" className="mr-3" style={{ color: 'blue' }}><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.youtube.com/@" className="mr-3" style={{ color: '#FF0000' }}><FontAwesomeIcon icon={faYoutube} /></a>
              {/* Add more social media icons and links as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="col-md-12 mt-4 d-flex align-items-center">
        <h5 className="partner-heading">Our Partners:</h5>
        <div className="partner-logos">
          <img src="images/ken.png" alt="Partner Logo 1" className="partner-logo" />
          <img src="images/eac.png" alt="Partner Logo 2" className="partner-logo" />
          <img src="images/afr.png" alt="Partner Logo 3" className="partner-logo" />
          <img src="images/germ.png" alt="Partner Logo 3" className="partner-logo" />       
          {/* Add more partner logos as needed */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
