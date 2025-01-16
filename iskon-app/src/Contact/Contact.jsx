import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      {/* Contact Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        
        {/* Navigate to HomePage */}
        <Link className="Home-btn" to="/">HOME</Link>
      </div>
    

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <img src="./public/Templeimg.jpg" alt="Temple" />
        <div className="info">
          <h2>Get in Touch</h2>
          <p>The temple is now open for public visits following Maharashtra guidelines.</p>
          <p>
            Visit us: Survey No. 50, Katraj – Kondhwa Rd, Pune, Maharashtra
            <br />
            Mail us: 
             <a href="mailto:sevaoffice@iskconpune.in"> sevaoffice@iskconpune.in</a>
            <br />
            Call us: 
            <a href="tel:+918411845000"> +91 8411 845 000</a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Leave a Reply</h2>
        <form>
          <label htmlFor="name">Your Name (required)</label>
          <input type="text" id="name" required />
          
          <label htmlFor="email">Your Email (required)</label>
          <input type="email" id="email" required />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
          
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="4"></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 ISKCON Pune. All rights reserved. <a href="/privacy">Privacy Policy</a></p>
      </footer>
    </div>
  );
};


export default Contact;
