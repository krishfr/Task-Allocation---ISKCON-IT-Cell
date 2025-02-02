import{ useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './HomePage.css'
import carousel1 from '../Assets/carousel1.jpg'
import carousel2 from '../Assets/carousel2.jpg'
import carousel3 from '../Assets/carousel3.jpg'
import carousel4 from '../Assets/carousel4.jpg'
import Schedule from './Schedule.jsx'
import Card from './Card.jsx'
import DonationSection from './Donation.jsx';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="homepage">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="since-text">Since 2013</span>
            <h1>Unveiling the spiritual journey of Lord Krishna & Guru Parampara</h1>
          </div>
          <div className="hero-carousel">
            {images.map((img, index) => (
              <img
                key={index}
                src={img || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className={`carousel-image ${currentSlide === index ? 'active' : ''}`}
              />
            ))}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="stats-container">
      <div className="stats-card">
        <div className="stat-item">
          <span className="stat-number">
            <CountUp start={0} end={300} duration={2.5} />
          </span>
          <p className="stat-text">CRORE MEALS SERVED<br />AROUND THE WORLD</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            <CountUp start={0} end={76} duration={2.5} suffix="+" />
          </span>
          <p className="stat-text">CRORE MEALS SERVED<br />SINCE COVID 19 LOCKDOWN</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            <CountUp start={0} end={56} duration={2.5} />
          </span>
          <p className="stat-text">YEARS OF SERVICE<br />TO HUMANITY</p>
        </div>
      </div>
    </div>
      </div>
      <Card/>
      <br />
      <DonationSection/>
      <br />
      <Schedule/>

    </div>
  );
};

export default HomePage;

