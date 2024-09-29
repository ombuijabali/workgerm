import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    departureDate: '',
    country: '',
    industry: '',
    otherIndustry: '',
    experience: '',
    stayDuration: '',
    visitedBefore: '',
    hasPassport: '',
    reason: '',
    extraInfo: '',
    heardFrom: '',
    acceptTerms: false,
    acceptDataPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      departureDate: formData.departureDate,
      country: formData.country,
      industry: formData.industry,
      otherIndustry: formData.otherIndustry,
      experience: formData.experience,
      stayDuration: formData.stayDuration,
      visitedBefore: formData.visitedBefore,
      hasPassport: formData.hasPassport,
      reason: formData.reason,
      extraInfo: formData.extraInfo,
      heardFrom: formData.heardFrom
    };

    // Sending email using EmailJS
    emailjs
      .send('service_4ve5lox', 'template_ghzcm1w', emailData, 'quIxVoLXuXpMksOyA')
      .then(
        (result) => {
          alert('Form submitted and email sent!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send email, please try again.');
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Candidates Contact Form</h1>
        <p>Please fill out the form below and our team will be in contact with you soon.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth*"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="departureDate"
            placeholder="When can you depart for Europe?*"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country?*"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <div className="industry-options">
            <p>Which industry do you want to work in?</p>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Select an industry*</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Engineering and Architecture">Engineering and Architecture</option>
              <option value="Horticulture">Horticulture</option>
              <option value="Medicine">Medicine</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.industry === 'Other' && (
            <input
              type="text"
              name="otherIndustry"
              placeholder="If you selected 'Other', please specify"
              value={formData.otherIndustry}
              onChange={handleChange}
            />
          )}

          <textarea
            name="experience"
            placeholder="Briefly describe your experience within your selected industries*"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="text"
            name="stayDuration"
            placeholder="How long do you want to stay in Europe?*"
            value={formData.stayDuration}
            onChange={handleChange}
            required
          />

          <select
            name="visitedBefore"
            value={formData.visitedBefore}
            onChange={handleChange}
            required
          >
            <option value="">Have you ever visited any European country on a working holiday visa?*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select
            name="hasPassport"
            value={formData.hasPassport}
            onChange={handleChange}
            required
          >
            <option value="">Do You Have A Valid Passport?*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <textarea
            name="reason"
            placeholder="Briefly describe why you want to do a working holiday in Europe*"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>

          <textarea
            name="extraInfo"
            placeholder="Any extra information or queries regarding your enquiry"
            value={formData.extraInfo}
            onChange={handleChange}
          ></textarea>

          <select
            name="heardFrom"
            value={formData.heardFrom}
            onChange={handleChange}
            required
          >
            <option value="">Where did you hear about Germ Waves?*</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Google Search">Google Search</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Other">Other</option>
          </select>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              I accept the Terms & Conditions
            </label>
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="acceptDataPolicy"
                checked={formData.acceptDataPolicy}
                onChange={handleChange}
                required
              />
              I agree to Germ Waves's Data Collection Policy
            </label>
          </div>

          <button type="submit" className="submit-button small-button">SUBMIT REQUEST</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
