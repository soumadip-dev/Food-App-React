import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-description">
          We're here to help! If you have any questions or feedback, feel free
          to reach out to us. Our team will get back to you as soon as possible.
        </p>
        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <ul>
            <li>Email: support@rasoii.com</li>
            <li>Phone: +1 800 123 4567</li>
            <li>Address: 123 Food Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;