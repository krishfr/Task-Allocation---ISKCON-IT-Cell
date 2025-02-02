// import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact-head' >
      {/* Contact Banner */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-divider">&gt;</span>
          <span className="breadcrumb-current">Contact Us</span>
        </div>
      </div>


{/* Get in Touch Section */}
<div className="get-in-touch">
  <div className="image-container">
    <img className="temple-img" src="./src/Contact/icon/Templeimg2.png" alt="ISKCON Temple" />
  </div>
  <div className="text-container">
    <div className="info">
      <h1 className="section-title">GET IN TOUCH</h1>
      <p className="description">
        The temple is now open for public visits following Maharashtra guidelines. Experience the serene environment and divinity at ISKCON Pune.
      </p>
    </div>
    <div className="info">
      <h1 className="section-title">CONNECT WITH US</h1>
      <p className="description">
        Stay updated with ISKCON Pune&apos;s activities, teachings, and events through our website and social media channels. Let&apos;s walk together on the path of devotion and self-realization.
      </p>
    </div>
    <div className="info">
      <h1 className="section-title">EXPERIENCE THE DIVINE BLISS</h1>
      <p className="description">
        Step into the sacred premises of ISKCON Pune and immerse yourself in an atmosphere of spirituality, peace, and devotion. With serene surroundings and a magnificent temple architecture, each visit is a journey into a divine realm.
      </p>
    </div>
  </div>
</div>


     {/*  contact-page  */}
      <div className="contact-page">
        <br />
        <br />
      <h1 className="contact-header">Contact Details</h1>
      <br />
      <br />
      <div className="contact-row">
        {/* Location Box */}
        <div className="contact-box">
          <img
            src="./src/Contact/icon/location.png"
            alt="Location"
            className="contact-icon"
          />
          <h3>ISKCON PUNE DEPARTMENT</h3>
          <p>
          Survey No. 50, Katraj - Kondhwa Rd, Pune, Maharashtra
          </p>
        </div>

        {/* Email Box */}
        <div className="contact-box">
          <img
            src="./src/Contact/icon/message.png" 
            alt="Email"
            className="contact-icon"
          />
          <h3>ISKCON</h3>
          <p>
          <a href="mailto:sevaoffice@iskconpune.in">
             sevaoffice@iskconpune.in
            </a>
          </p>
        </div>

        {/* Phone Box */}
        <div className="contact-box">
          <img
            src="./src/Contact/icon/phone-call.png"
            alt="Phone"
            className="contact-icon"
          />
          <h3>ISKCON</h3>
          <p>
            Donation Office:
            <a href="tel:+918380077608">+91 838-007-7608</a>,{' '}
            <a href="tel:+919225545984">+91 922-554-5984</a>
            <br />
            ISKON Guest House:
            <a href="tel:+918411845000">+91 841-184-5000</a>
          </p>
        </div>

        {/* Social Media Box */}
        <div className="contact-box">
          <img
            src="./src/Contact/icon/social-media.png"
            alt="Social Media"
            className="contact-icon"
          />
          <h3>ISKCON</h3>
          <p>Social Media</p>
          <div className="social-icons">
          <a href="https://www.facebook.com/ISKCONNVCC"  className="icon facebook">
            <i className="fab fa-facebook-f"></i>
            <img
            src="./src/Contact/icon/facebook.png"
            alt="Facebook"
          />
          </a>
          <a href="https://x.com/ISKCONPune?mx=2" className="icon twitter">
            <i className="fab fa-twitter"></i>
            <img
            src="./src/Contact/icon/twitter.png"
            alt="Twitter"
          />
          </a>
          <a href="https://www.instagram.com/iskconnvccpune/" className="icon instagram">
            <i className="fab fa-instagram"></i>
            <img 
            src="./src/Contact/icon/instagram.png" 
            alt="Instagram" 
            />
          </a>
          <a href="https://www.youtube.com/@ISKCONNVCCPune" className="icon youtube">
            <i className="fab fa-youtube"></i>
            <img
            src="./src/Contact/icon/youtube.png"
            alt="YouTube"
          />
          </a>
          <a href="https://t.me/iskconpuneofficial" className="icon telegram">
            <i className="fab fa-telegram"></i>
            <img
            src="./src/Contact/icon/telegram.png"
            alt="Telegram"
          />
          </a>
          </div>
        </div>
      </div>
    </div>

     {/* Contact Form */}
     <div className="contact-form">
  <h2>Leave a Reply</h2>
  <form>
    <label htmlFor="name">
      Your Name <span style={{ color: "#D9534F" }}>(*Required)</span>
    </label>
    <input type="text" id="name" required />
    
    <label htmlFor="email">
      Your Email <span style={{ color: "#D9534F" }}>(*Required)</span>
    </label>
    <input type="email" id="email" required />
    
    <label htmlFor="subject">
      Subject <span style={{ color: "#D9534F" }}>(*Required)</span>
    </label>
    <input type="text" id="subject" />
    
    <label htmlFor="message">Your Message</label>
    <textarea id="message" rows="4" required></textarea>
    
    <button type="submit" id="btn">Send</button>
  </form>
</div>


<br />

      {/* Google Map */}
       <address id='address'>ISKCON TEMPLE AND NVCC, Katraj - Kondhwa Rd,<br />
        Tilekar Nagar, Kondhwa Budruk, Pune, Maharashtra 411048, India</address>
        <br />  <hr /><br />  <br />
        <div className='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.788435482031!2d73.87810527579575!3d18.447912571388528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eafba92dd749%3A0x5eba1b5bbe09d7ee!2sISKCON%20NVCC%20Pune!5e0!3m2!1sen!2sus!4v1737107507453!5m2!1sen!2sus" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
   <br />
   <br />
      
    </div>
  );
};
 

export default Contact;
