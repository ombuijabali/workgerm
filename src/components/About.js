import React, { useState, useEffect } from 'react';
import './About.css'; // Link to CSS file for styling
import teamImage from './images/3.jpg'; // Add an image of your team or company

const testimonialsData = [
  {
    name: 'John Doe',
    title: 'CEO, ExampleCorp',
    message: 'This company truly transformed our business. Their services are outstanding and the team is highly professional.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Jane Smith',
    title: 'Managing Director, TechWave',
    message: 'Their expertise and attention to detail were exactly what we needed. Highly recommend their services!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Samuel Green',
    title: 'Project Manager, BuildIt Ltd.',
    message: 'We were impressed by their dedication and the results they delivered. Outstanding support throughout the process.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Emily Brown',
    title: 'HR Director, TalentSync',
    message: 'Their approach is unique and innovative, which helped us streamline our operations effectively.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Michael Lee',
    title: 'Founder, InnovateX',
    message: 'Exceptional service! They went above and beyond to ensure our project was a success.',
    image: 'https://via.placeholder.com/100'
  }
];

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => 
        (prevTestimonial + 1) % testimonialsData.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="about-page">
      
      {/* About Us Section */}
      <section className="about-section">
        <h1 className="about-title">About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Welcome to our company, where innovation meets excellence. Since our inception, we have been dedicated to providing top-tier solutions that drive value and growth for businesses across industries. Our team is made up of experts with a passion for problem-solving and a commitment to quality.
            </p>
            <p className="about-description">
              Over the years, we have built a reputation for delivering exceptional results for our clients. Whether it's through our cutting-edge technology solutions or our personalized consulting services, we strive to offer the best to every client we serve. Our aim is not just to meet expectations but to exceed them at every turn.
            </p>
            <p className="about-mission">
              <strong>Our Mission:</strong> To empower businesses by delivering innovative, scalable solutions that are tailored to meet the unique challenges of each client. We believe in building lasting partnerships based on trust, transparency, and mutual success.
            </p>
            <p className="about-vision">
              <strong>Our Vision:</strong> To be recognized globally as a leader in providing transformative business solutions, helping companies unlock new potential and thrive in an ever-evolving marketplace.
            </p>
            <p className="about-values">
              <strong>Our Values:</strong>
              <ul>
                <li><strong>Innovation:</strong> We are always at the forefront of new developments, leveraging the latest tools and methods to deliver cutting-edge solutions.</li>
                <li><strong>Integrity:</strong> Honesty and transparency are at the core of everything we do. We believe in building trust with our clients by being straightforward and dependable.</li>
                <li><strong>Client-Centered:</strong> Your success is our priority. Every decision we make is focused on helping you achieve your goals.</li>
                <li><strong>Excellence:</strong> We are committed to delivering quality in every aspect of our work, ensuring that our solutions are reliable and efficient.</li>
              </ul>
            </p>
          </div>
          <div className="about-image">
            <img src={teamImage} alt="Our Team" className="team-image" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        {/* Display the current testimonial */}
        <div className="testimonial-card">
          <img
            src={testimonialsData[currentTestimonial].image}
            alt={testimonialsData[currentTestimonial].name}
            className="testimonial-image"
          />
          <p className="testimonial-message">
            "{testimonialsData[currentTestimonial].message}"
          </p>
          <h3 className="testimonial-name">
            {testimonialsData[currentTestimonial].name}
          </h3>
          <p className="testimonial-title">
            {testimonialsData[currentTestimonial].title}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
