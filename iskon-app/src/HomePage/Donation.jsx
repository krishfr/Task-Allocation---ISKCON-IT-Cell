
import './Donation.css';
import Image1 from '../Assets/annadaan.png'
import Image2 from '../Assets/bhagvaadgita.png'
import Image3 from '../Assets/tuladaan.png'
import Image4 from '../Assets/deepdaan.png'
import Image5 from '../Assets/sponsor.png'
import Image6 from '../Assets/gaumata.png'
import Image7 from '../Assets/balaji.png'
import Image8 from '../Assets/ekadashi.png'

const donationCategories = [
  { icon: Image1, title: "Annadan | Sesame Seeds | Groceries" },
  { icon: Image2, title: "Bhagavad Gita Daan" },
  { icon: Image3, title: "Tula Daan" },
  { icon: Image4, title: "Deep Daan" },
  { icon: Image5, title: "Sponsor Lord Balaji and His Consorts Sri Devi (Maa Laxmi) and Bhudevi's Puja" },
  { icon: Image6, title: "Daily Gau Mata Seva" },
  { icon: Image7, title: "Sri Balaji Vigraha Seva" },
  { icon: Image8, title: "Ekadashi" },
];

const DonationSection = () => {
  return (
    <section className="donation-section">
      <h2 className="donation-title">Make a Donation</h2>
      <p className="donation-quote">Srila Prabhupada said,</p>
      <p className="donation-main-quote">Charity should only be given to propagate Krishna Consciousness all over the world.</p>
      <p className="donation-subtext">No matter small or big, Krishna sees your Heart, whether you want to serve him or not.</p>
      <div className="donation-grid">
        {donationCategories.map((category, index) => (
          <div key={index} className="donation-card">
            <img src={category.icon || "/placeholder.svg"} alt="" className="donation-icon" />
            <p className="donation-category">{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationSection;

