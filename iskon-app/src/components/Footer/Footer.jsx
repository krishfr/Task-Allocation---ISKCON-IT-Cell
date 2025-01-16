import './Foorter.css'
import footerlogo from "../../Assets/footerlogo.jpg";
import founder from "../../Assets/founder.jpg";

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
         
        <div className="footer-about">
          <h4>About ISKCON</h4>
          <p>
          The International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement, is
          dedicated to promoting spiritual knowledge and the practices of Bhakti Yoga.
          </p>
        </div>

        <div className="footer-founder">
          <h4>Founder-Acharya</h4>
          <p>
            His Divine Grace
            <br />
            A.C. Bhaktivedanta Swami Prabhupada
          </p>
          <img src={founder|| "/placeholder.svg"} alt="founder" className="founder-image" />
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
      <p>© {new Date().getFullYear()} ISKCON. All Rights Reserved.</p>
      
      
      </div>
    </footer>
    </div>
  )
}