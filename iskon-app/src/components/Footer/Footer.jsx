import './Foorter.css'
import footerlogo from "../../Assets/footerlogo.jpg";
import founder from "../../Assets/founder.jpg";
import Facebook from "../../Assets/Facebook.png";
import insta from "../../Assets/insta.webp";
import twitter from "../../Assets/twitter.webp"
import ytLogo from "../../Assets/ytLogo.png";

export default function Footer() {
  return (
    <div>
        <footer className="footer">
    <div className="footer-top">
        <div className="footer-logo">
          <img src={footerlogo || "/placeholder.svg"} alt="ISKCON Logo" className="footlogo" />
        </div>
        <div className='footer-head'>
          <h3>ISKCON</h3>
          <p>
            International Society for Krishna Consciousness
          </p>
        </div>
        <div className="footer-founder">
          <h4>Founder-Acharya</h4>
          <p>
            His Divine Grace
            <br />
            A.C. Bhaktivedanta Swami Prabhupada
          </p>
        </div>
        <div className='footer-founder-img'>
          <img src={founder|| "/placeholder.svg"} alt="founder" className="founder-image" />
        </div>
    </div>
    <hr className="short-divider" />
      <div className='footer-middle'>
      <div className="footer-about">
          <h4>About ISKCON</h4>
          <p>
          The International Society for Krishna Consciousness (ISKCON), <br /> also known as the Hare Krishna movement,<br /> is
          dedicated to promoting spiritual knowledge <br /> and the practices of Bhakti Yoga.
          </p>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
      <div className='year'><p>© {new Date().getFullYear()} ISKCON. All Rights Reserved.</p></div>
      <div className='social-icon'>
        <a href="#" className="fa"><img src={Facebook|| "/placeholder.svg"} alt="facebook" className="fb-icon" /></a>
        <a href="#" className="fa"><img src={insta|| "/placeholder.svg"} alt="facebook" className="ig-icon" /></a>
        <a href="#" className="fa"><img src={twitter|| "/placeholder.svg"} alt="facebook" className="tw-icon" /></a>
        <a href="#" className="fa"><img src={ytLogo|| "/placeholder.svg"} alt="facebook" className="yt-icon" /></a>
      
      </div>
      </div>
    </footer>
    </div>
  )
}