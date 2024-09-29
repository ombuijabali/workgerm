import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <Slider {...settings}>
          <div>
            <img src="/images/1.jpg" alt="Hero 1" className="hero-image" />
          </div>
          <div>
            <img src="/images/2.jpg" alt="Hero 2" className="hero-image" />
          </div>
          <div>
            <img src="/images/3.jpg" alt="Hero 3" className="hero-image" />
          </div>
        </Slider>
        <div className="hero-text">
        <h1 class="white-text">WORK PERMIT EXPERTS</h1>
          <p class="white-text">PROFESSIONAL WORK PERMIT SERVICES FOR YOUR IMMIGRATION NEEDS.</p>
          <p class="highlight">Your path to working in Europe made simple.</p>
          <Link to="/contact" className="btn cta-btn">Contact Us</Link>
        </div>
      </section>

      <section className="services">
        <h2>Our Work Permit Services</h2>
        <div className="services-list">
          
          <div className="service-item">
            <i className="fas fa-clipboard-check service-icon"></i> {/* Consultation Icon */}
            <h3>Work Permit Consultation</h3>
            <p>
              Get personalized consultations tailored to your immigration needs. Our experts will guide you through understanding eligibility criteria, visa options, and application timelines. We provide comprehensive advice on the best work permit solutions for your specific situation.
            </p>
            <Link to="/services#consultation" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-file-alt service-icon"></i> {/* Application Assistance Icon */}
            <h3>Application Assistance</h3>
            <p>
              We manage your entire work permit application from start to finish. Our experienced team ensures that all documents are completed accurately and submitted on time, reducing the risk of delays or rejections.
            </p>
            <Link to="/services#application-assistance" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-user-tie service-icon"></i> {/* Employer Compliance Icon */}
            <h3>Employer Compliance</h3>
            <p>
              Our Employer Compliance services assist businesses in adhering to local immigration laws when hiring international employees. We provide ongoing support to ensure your organization complies with labor and immigration regulations, minimizing legal risks.
            </p>
            <Link to="/services#employer-compliance" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-briefcase service-icon"></i> {/* LMIA Applications Icon */}
            <h3>LMIA Applications</h3>
            <p>
              For businesses looking to hire foreign workers, we offer expert guidance on applying for Labour Market Impact Assessments (LMIA). We help ensure your LMIA application is well-documented, increasing the likelihood of approval for your international hires.
            </p>
            <Link to="/services#lmia" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-globe service-icon"></i> {/* Global Mobility Icon */}
            <h3>Global Mobility Solutions</h3>
            <p>
              Our Global Mobility Solutions help multinational companies manage the transfer of employees across borders. We offer strategic advice and assistance with navigating complex international work permit requirements, ensuring smooth relocations.
            </p>
            <Link to="/services#global-mobility" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-shield-alt service-icon"></i> {/* Appeals & Compliance Icon */}
            <h3>Appeals & Compliance Support</h3>
            <p>
              If your work permit application has been refused, we offer appeals support. Our team can review your case, guide you through the appeals process, and help you reapply. We also provide ongoing compliance services to avoid future refusals.
            </p>
            <Link to="/services#appeals" className="learn-more">Learn More</Link>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src="/images/about.jpg" alt="About Us" className="about-image" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Germ Waves is a Germany-based consultancy firm specializing in work permit services for individuals and businesses. Our dedicated team provides expert guidance to navigate the complexities of work permit applications, ensuring a smooth and efficient process. We are committed to delivering personalized solutions that cater to your specific requirements, helping you achieve your goals seamlessly.
            </p>
            <Link to="/about" className="btn about-btn">Read More</Link>
          </div>
        </div>
      </section>


      {/* Clients Section */}
      <section className="clients">
        <h2>Our Partners</h2>
        <div className="client-logos">
          <img src="/images/afr.png" alt="Client 1" className="client-logo" />
          <img src="/images/ken.png" alt="Client 2" className="client-logo" />
          <img src="/images/germ.png" alt="Client 3" className="client-logo" />
          <img src="/images/eac.png" alt="Client 4" className="client-logo" />
          
        </div>
        <Link to="/clients" className="btn">See All Clients</Link>
      </section>
    </main>
  );
};

export default Home;
