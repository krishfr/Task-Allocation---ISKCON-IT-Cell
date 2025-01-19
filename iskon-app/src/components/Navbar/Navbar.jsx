import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import navbarlogo from '../../assets/navbarlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({});
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setIsOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={navbarlogo || '/placeholder.svg'} alt="ISKCON Logo" className="navbar-logo" />
        <div className="brand-text">
          <h1>ISKCON</h1>
          <p>International Society for Krishna Consciousness</p>
        </div>
      </a>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>

        {/* <div className="dropdown">
          <div
            className="nav-link"
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => toggleDropdown('about')}
          >
            About
            {isOpen.about && (
              <div className="dropdown-content">
                <Link to="/about/history">History</Link>
                <Link to="/about/mission">Mission</Link>
                <Link to="/about/founder">Founder</Link>
              </div>
            )}
          </div>
        </div> */}

        {/* <div className="dropdown">
          <div
            className="nav-link"
            onMouseEnter={() => toggleDropdown('temple')}
            onMouseLeave={() => toggleDropdown('temple')}
          >
            Temple
            {isOpen.temple && (
              <div className="dropdown-content">
                <Link to="/temple/inside">What is inside?</Link>
                <Link to="/temple/activities">Activities</Link>
                <Link to="/temple/events">Events</Link>
                <Link to="/temple/timing">Timing</Link>
                <Link to="/temple/calendar">Vaishnava Calendar</Link>
              </div>
            )}
          </div>
        </div> */}

        <Link to="/services" className="nav-link">Services</Link>
        {/* <Link to="/donate" className="nav-link">Donate</Link> */}
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/login" className="nav-link">Login</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
