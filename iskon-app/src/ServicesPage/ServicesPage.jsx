import React from 'react';
import './ServicesPage.css';

export default function ServicesPage() {
  const teamImages = [
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-4764b14c6d371c8.png',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-9264b14c6a98e0a.jpg', 
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-5864b14c6ae70e7.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-8364b14c6b8a97c.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-8264b14c6a51bda.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-9264b14c6b1b76b.jpg',
    'https://iskcon-vrindavan.s3.ap-south-1.amazonaws.com/page_category/page-category-_336784c1b1a4fd0.jpg',
    'https://iskconstatic.s3.ap-south-1.amazonaws.com/image-7964b14c6a28903.jpg',
  ];

  const serviceTitles = [
    'Devotee Kitchen ',
    '24 Hour Kirtan Department.',
    'Community Service Centre',
    'Book Distribution - Sankirtan Department',
    'Deity Worship',
    'Cultural Events and Festival',
    'New Bhakta Department',
    'Life Membership',
  ];

  return (
    <div className="container services-page">
      <div className="service-area">
        <h3>Our Services</h3>
        {/* <p>
          Our team is dedicated to promoting a culture of collaboration, innovation, and excellence. With a passion for bringing transformative solutions to businesses, we work together to achieve success and make a positive impact on the community. Learn more about the individuals who lead the way in our mission to create meaningful change.
        </p> */}
        <div className="service-img-wraping">
          {teamImages.map((image, index) => (
            <div className="card" key={index}>
              <img
                src={image}
                alt={`Team Member ${index + 1}`}
                className="card-img-top"
              />
              <div className="team-content">
                <h5>{serviceTitles[index]}</h5>
                <a href="/team/member" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
