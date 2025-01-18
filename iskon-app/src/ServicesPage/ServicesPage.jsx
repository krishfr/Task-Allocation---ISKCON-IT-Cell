import React, { useState } from 'react';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const teamImages = [
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-8264b14c6a51bda.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-9264b14c6a98e0a.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-5864b14c6ae70e7.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-8364b14c6b8a97c.jpg',
    'https://iskcon-vrindavan.s3.ap-south-1.amazonaws.com/page_category/page-category-_336784c1b1a4fd0.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-9264b14c6b1b76b.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-4764b14c6d371c8.png',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-7964b14c6a28903.jpg',
  ];

  const serviceTitles = [
    'Deity Worship',
    '24 Hour Kirtan Department',
    'Community Service Centre',
    'Book Distribution',
    'New Bhakta Department',
    'Cultural Events and Festivals',
    'Devotee Kitchen',
    'Life Membership',
  ];

  const serviceDescriptions = [
    'Experience the divine through daily worship and rituals.',
    'Engage in continuous kirtan and spiritual melodies.',
    'A hub for community outreach and spiritual support.',
    'Join the movement to spread spiritual knowledge.',
    'Guidance and support for new devotees.',
    'Celebrate festivals and cultural events with devotion.',
    'Delicious prasadam prepared with love and devotion.',
    'Become a life member and support our mission.',
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container services-page">
      <div className="service-area">
        <h4>Our Services</h4>
        <p>The Sri Sri Krishna Balaram Mandir stands as a beacon of spiritual devotion, embodying the timeless pastimes of Krishna and Balaram in their eternal playground. This magnificent temple symbolizes the realization of a visionary dream to create a sanctuary of unparalleled beauty, dedicated to the worship of these divine brothers. It holds deep significance for devotees, offering a place where their transcendental presence is celebrated and remembered.</p>
        <div className="service-img-wraping">
          {teamImages.map((image, index) => (
            <div
              className={`card ${activeCard === index ? 'show' : ''}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <img
                src={image}
                alt={`Service ${index + 1}`}
                className="card-img-top"
              />
              <div className="team-content">
                <h5>{serviceTitles[index]}</h5>
                <p className="service-description">{serviceDescriptions[index]}</p>
                <Link to="/team/member" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
