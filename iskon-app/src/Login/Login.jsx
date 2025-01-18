// Login.js
import React, { useState } from 'react';
import './Login.css';
import GoogleIcon from '../Assets/google-icon.png'; // Make sure to add a Google icon image

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  
  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleBackToLogin = () => {
    setIsSignUp(false);
  };

  return (
    <div className="login-container">
      {!isSignUp ? (
        <div className="login-columns">
          {/* Admin Login Column */}
          <div className="login-column">
            <h2>Admin Login</h2>
            <div className="login-form">
              <input type="text" placeholder="Email or Phone" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button className="next-button">Next</button>
              <div className="form-footer">
                <span className="reset-link">Reset Password</span>
              </div>
              <div className="divider">- or -</div>
              <button className="google-button">
                <img src={GoogleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
                Log in with Google
              </button>
            </div>
          </div>

          {/* Volunteer Login Column */}
          <div className="login-column">
            <h2>Volunteer Login</h2>
            <div className="login-form">
              <input type="text" placeholder="Email or Phone" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button className="next-button">Next</button>
              <div className="form-footer">
                <span className="create-account" onClick={handleSignUpClick}>
                  Don't have an account?
                </span>
                <span className="reset-link">Reset Password</span>
              </div>
              <div className="divider">- or -</div>
              <button className="google-button">
                <img src={GoogleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
                Log in with Google
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Create Account</h2>
          <input type="email" placeholder="Your Email" className="input-field" />
          <div className="mobile-input">
            <select className="country-code">
              <option value="+91">India (+91)</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="text" placeholder="Mobile No." className="input-field" />
          </div>
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <input type="password" placeholder="Confirm Password" className="input-field" />
          <button className="otp-button">Send Email OTP</button>
          <button className="signup-button">Sign up</button>
          <div className="form-footer">
            <span className="login-link" onClick={handleBackToLogin}>
              Already have an account?
            </span>
          </div>
          <div className="divider">- or -</div>
          <button className="google-button">
            <img src={GoogleIcon || "/placeholder.svg"} alt="Google" className="google-icon" />
            Log in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;