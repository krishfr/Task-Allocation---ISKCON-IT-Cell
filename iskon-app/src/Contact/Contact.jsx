// import React from 'react';
import './Contact.css';

 const Contact = () => {
  return (
    <div>
   

      {/* Contact Banner */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        
        <a className='Home-btn' href="Homepage">HOME</a>
       
      </div>

      {/* Get in Touch Section */}

      <div className="contact-section-container">
      {/* Left side: Image */}
      <div className="contact-image-wrapper">
        <img
          src="https://www.iskconpune.com/wp-content/uploads/2023/02/balaji-temple-iskcon-temple.jpg" // Replace with the actual image path
          alt="Temple"
          className="contact-image"
        />
      </div>

      {/* Right side: Contact Details */}
      <div className="contact-details-wrapper">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          The temple is now open for public following the guidelines of
          Maharashtra Government. We invite you to take live darshan on our{" "}
          <a href="https://www.youtube.com/channel/UCt2eU9pu09RHURRefjDURng" className="highlight-link">YouTube Channel</a>.
        </p>

        {/* Visit Us Section */}
        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <img
              src="https://img.icons8.com/color/48/map-marker--v1.png" // Replace with actual location icon
              alt="Location Icon"
              className="contact-icon"
            />
          </div>
          <div>
            <h3 className="contact-subtitle">Visit us</h3>
            <p className="contact-details">
              Survey No. 50, Katraj – Kondhwa Rd, Tilekar Nagar, Kondhwa Budruk,
              Pune, Maharashtra 411 048
            </p>
          </div>
        </div>

        {/* Mail Us Section */}
        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <img
              src="https://img.icons8.com/color/48/new-post.png" // Replace with actual mail icon
              alt="Mail Icon"
              className="contact-icon"
            />
          </div>
          <div>
            <h3 className="contact-subtitle">Mail us</h3>
            <p className="contact-details">
              <a href="mailto:sevaoffice@iskconpune.in">
                sevaoffice@iskconpune.in
              </a>
            </p>
          </div>
        </div>

        {/* Call Us Section */}
        <div className="contact-item">
          <div className="contact-icon-wrapper">
            <img
              src="https://img.icons8.com/color/48/phone.png" // Replace with actual phone icon
              alt="Phone Icon"
              className="contact-icon"
            />
          </div>
          <div>
            <h3 className="contact-subtitle">Call us</h3>
            <p className="contact-details">
              Donation Office:{" "}
              <a href="tel:+918380077608" className="contact-phone">
                +91 838-007-7608
              </a>
              <br />
              <a href="tel:+919225545984" className="contact-phone">
                +91 922-554-5984
              </a>
              <br />
              ISKCON Guest House:{" "}
              <a href="tel:+917767900900" className="contact-phone">
                +91 776-790-0900
              </a>
              <br />
              For All Information:{" "}
              <a href="tel:+918411845000" className="contact-phone">
                +91 841-184-5000
              </a>
            </p>
          </div>
        </div>
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
   
      {/* Footer */}
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src="https://www.iskconpune.com/wp-content/uploads/2023/02/iskcon-pune-logo.png"
            alt="ISKCON Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Your support will help us continue our mission of spreading Krishna
            Consciousness, hope, and happiness across the world. Donate now!
          </p>
          <br />
          <button className="donate-button"> DONATE NOW
             <span className="heart-icon"></span>
          </button>

        </div>
        <div className="footer-section">
          <h3>CONTACTS</h3>
          <p className='contact'><a href="#" >Survey No, 50, Katraj – Kondhwa Rd,
          Tilekar Nagar, Kondhwa Budruk, Pune, Maharashtra 411 048</a></p>
          <p className='contact' id='p'>Email: <a href="#" >sevaoffice@iskconpune.in</a></p>
          <p className='p'>Donation Office: <a href="tel:+918380077608">+91 838-007-7608 <br />+91 922-554-5984</a></p>
          <p className='p'>ISKCON Guest House: <a href="tel:+91776790900">+91 776-790-0900</a></p>
          <p className='p'>For All Information: <a href="tel:+91841184500">+91 841-184-5000</a></p>
        </div>
        <div className="footer-section">
          <h3>ABOUT</h3>
          
          <ul className='about'>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Deities and Live Darshan</a></li>
          </ul>
          
        </div>
        <div className="footer-section">
          <h3>DONATE NOW</h3>
          <ul  className='about'>
            <li><a href="#">Sri Balaji Vigraha Seva</a></li>
            <li><a href="#">Sri Sri Radha Vrindavanchandra Vigraha Seva</a></li>
            <li><a href="#">Sri Sri Jagannath Baladev Subhadra Vigraha Seva</a></li>
            <li><a href="#">Go Seva</a></li>
            <li><a href="#">Sadhu Bhojan</a></li>
          </ul>
        </div>
      </div>
    <br /><br />

      {/* Social Media Section */}
      <div className="footer-social-media">

      <a href="https://x.com/ISKCONPune?mx=2" className="social-icon" data-name="Twitter"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
          />
        </a>

        <a href="https://www.facebook.com/ISKCONNVCC" className="social-icon"  data-name="Facebook"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
          />
        </a>

        <a href="https://www.google.com/maps/place/ISKCON+NVCC+Pune/@18.4479075,73.8806802,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eafba92dd749:0x5eba1b5bbe09d7ee!8m2!3d18.4479075!4d73.8806802!16s%2Fm%2F0v3g7rc?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D" className="social-icon" data-name="Google Maps"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2335/2335353.png"
            alt="Google Maps"
          />
        </a>

        <a href="https://www.instagram.com/iskconnvccpune/" className="social-icon" data-name="Instagram"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Instagram"
          />
        </a>
        
        <a href="https://www.youtube.com/@ISKCONNVCCPune" className="social-icon" data-name="YouTube"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            alt="YouTube"
          />
        </a>

        <a href="https://t.me/iskconpuneofficial" className="social-icon" data-name="Telegram"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram"
          />
        </a>

        <a href="https://en.m.wikipedia.org/wiki/ISKCON_Temple,_Pune" className="social-icon" data-name="Wikipedia"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15466/15466314.png"
            alt="Wikipedia"
          />
        </a>

        <a href="https://www.tripadvisor.in/Attraction_Review-g297654-d3838598-Reviews-ISKCON_NVCC_Temple-Pune_Pune_District_Maharashtra.html" className="social-icon" data-name="TripAdvisor"   target="_blank"
        rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968989.png"
            alt="TripAdvisor"
          />
        </a>
      </div>
      
     <br /><br /> <hr />
      <div className="footer-bottom">
        <div>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </div>
        <p>Copyright © 2023 ISKCON NVCC. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};


export default Contact