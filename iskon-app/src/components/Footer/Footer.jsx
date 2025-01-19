import './Footer.css'
import { Link } from 'react-router-dom';
import footerlogo from "../../Assets/footerlogo.jpg";
import founder from "../../Assets/founder.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footerlogo || "/placeholder.svg"} alt="ISKCON Logo" className="logo" />
          <h3>ISKCON</h3>
          <p>
            International Society for Krishna Consciousness
          </p>
        </div>

        <div className="footer-founder">
        <img src={founder|| "/placeholder.svg"} alt="founder" className="founder-image" />
        <div>
          <h4>Founder-Acharya</h4>
          <p>
            His Divine Grace
            <br />
            A.C. Bhaktivedanta Swami Prabhupada
          </p>
          </div>
        </div>
      </div>

      <hr className="divider" />

<div className="footer-bottom">
  <div className="footer-links">
    <Link to="https://www.iskconpune.com/terms-of-use/" className="footer-link">
      Terms of use
    </Link>
    <span className="footer-divider">|</span>
    <Link to="https://www.iskconpune.com/privacy-policy-2/" className="footer-link">
      Privacy Policy
    </Link>
  </div>

  <p className="footer-copyright">
    Copyright © {new Date().getFullYear()} ISKCON. All Rights Reserved.
  </p>

  <div className="footer-socials">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Facebook">
      <FacebookIcon />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Twitter">
      <TwitterIcon />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="Instagram">
      <InstagramIcon />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" data-name="YouTube">
      <YouTubeIcon />
    </a>
  </div>
</div>

      
    </footer>
    </div>
  )
}