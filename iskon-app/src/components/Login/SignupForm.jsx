// src/components/Login/SignupForm.jsx
import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return;
    }
    // Implement signup logic here (e.g., call API to register the user)
    setError('');
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        {showPopup && (
          <div className="popup-message">
            {error ? <p>{error}</p> : <p>Sign up successful!</p>}
          </div>
        )}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select>
          <option>India (+91)</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          type="text"
          placeholder="Mobile No. Ex.1112224444"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name e.g. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignup}>Sign up</button>
        <br />
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
}

export default SignupForm;
