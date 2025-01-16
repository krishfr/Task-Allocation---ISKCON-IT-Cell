import React, { useState } from 'react';
import './Navbar.css';
import navbarlogo from '../../assets/navbarlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (menu) => {
    setIsOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={navbarlogo || "/placeholder.svg"} alt="ISKCON Logo" className="logo" />
        <div className="brand-text">
          <h1>ISKCON</h1>
          <p>International Society for Krishna Consciousness</p>
        </div>
      </div>
      
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        
        <div className="dropdown">
          <button 
            className="nav-link"
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => toggleDropdown('about')}
          >
            About
            {isOpen.about && (
              <div className="dropdown-content">
                <a href="/about/history">History</a>
                <a href="/about/mission">Mission</a>
                <a href="/about/founder">Founder</a>
              </div>
            )}
          </button>
        </div>

        <div className="dropdown">
          <button 
            className="nav-link"
            onMouseEnter={() => toggleDropdown('temple')}
            onMouseLeave={() => toggleDropdown('temple')}
          >
            Temple
            {isOpen.temple && (
              <div className="dropdown-content">
                <a href="/temple/inside">What is inside?</a>
                <a href="/temple/activities">Activities</a>
                <a href="/temple/events">Events</a>
                <a href="/temple/timing">Timing</a>
                <a href="/temple/calendar">Vaishnava Calendar</a>
              </div>
            )}
          </button>
        </div>

        <a href="/guest-house" className="nav-link">Guest House</a>
        <a href="/ServicesPage" className="nav-link">Services</a>
        <a href="/donate" className="nav-link">Donate</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/login" className="nav-link">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

