// src/components/Login/loginPage.jsx
import React, { useState } from 'react';
import './loginPage.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [emailOrPhoneAdmin, setEmailOrPhoneAdmin] = useState('');
  const [passwordAdmin, setPasswordAdmin] = useState('');
  const [emailOrPhoneVolunteer, setEmailOrPhoneVolunteer] = useState('');
  const [passwordVolunteer, setPasswordVolunteer] = useState('');
  const [messageAdmin, setMessageAdmin] = useState('');
  const [messageVolunteer, setMessageVolunteer] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAdminLogin = () => {
    // Simulate a successful login for Admin
    setMessageAdmin('Logged in successfully as Admin');
    setSuccessMessage('Admin logged in successfully!');
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  const handleVolunteerLogin = () => {
    // Simulate a successful login for Volunteer
    setMessageVolunteer('Logged in successfully as Volunteer');
    setSuccessMessage('Volunteer logged in successfully!');
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div className="login-form-container">
      <div className="login-option">
        <h2>Login as Admin</h2>
        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            placeholder="Email or Phone"
            value={emailOrPhoneAdmin}
            onChange={(e) => setEmailOrPhoneAdmin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={passwordAdmin}
            onChange={(e) => setPasswordAdmin(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleAdminLogin}>
          Login
        </button>
        {messageAdmin && <p>{messageAdmin}</p>}
        <div className="links">
          <a href="#">Reset Password</a>
        </div>
        <div className="separator"></div>
      </div>
      <div className="login-option">
        <h2>Login as Volunteer</h2>
        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            placeholder="Email or Phone"
            value={emailOrPhoneVolunteer}
            onChange={(e) => setEmailOrPhoneVolunteer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={passwordVolunteer}
            onChange={(e) => setPasswordVolunteer(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleVolunteerLogin}>
          Login
        </button>
        {messageVolunteer && <p>{messageVolunteer}</p>}
        <div className="links">
          <Link to="/signup">Don't have an account? Sign up</Link>
          <a href="#">Reset Password</a>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="popup-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
