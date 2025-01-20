import React from "react";
import "./About.css";
import about from "../Assets/about.jpeg";
import BgImage from "./design-manadal1.png"

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header-about">
        <h1>About Us</h1>
        <p>Learn more about our journey and mission.</p>
      </header>

      <div className="container-about-market">
        <img src={BgImage} alt="image" className="bgImage"/>
        <div className="featurette">
          <div className="text-content">
            <h2 className="featurette-heading-about">
              History Of The Hare Krishna Movement
            </h2>
            <p className="lead-about">
              The International Society for Krishna Consciousness (ISKCON),
              otherwise known as the Hare Krishna movement, includes five hundred
              major centers, temples and rural communities, nearly one hundred
              affiliated vegetarian restaurants, thousands of namahattas or local
              meeting groups, a wide variety of community projects, and millions
              of congregational members worldwide. Although less than fifty years
              on the global stage, ISKCON has expanded widely since its founding by
              His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda in New York
              City in 1966. ISKCON belongs to the Gaudiya-Vaishnava sampradāya, a
              monotheistic tradition within the Vedic or Hindu culture. Philosophically
              it is based on the Sanskrit texts Bhagavad–gita and the Bhagavat Purana,
              or Srimad Bhagavatam. These are the historic texts of the devotional
              bhakti yoga tradition, which teaches that the ultimate goal for all
              living beings is to reawaken their love for God, or Lord Krishna, the
              “all-attractive one”.
            </p>
          </div>
          <div className="image-content">
            <img
              className="featurette-image"
              src={about}
              alt="Krishna Movement"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>

      <div className="scrolling-text-container-about">
        <h5 className="scrolling-text-about">
          || हरे कृष्ण, हरे कृष्ण, कृष्ण कृष्ण, हरे हरे <br />
          हरे राम हरे राम, राम राम, हरे हरे ||
        </h5>
      </div>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p className="about-section-text">
          The International Society for Krishna Consciousness (ISKCON), also known
          as the Hare Krishna movement, is a spiritual organization founded by A.C.
          Bhaktivedanta Swami Prabhupada in 1966. ISKCON aims to promote the teachings
          of Lord Krishna, as presented in the ancient Vedic scriptures such as the
          Bhagavad Gita and Srimad Bhagavatam. With over 800 temples worldwide, ISKCON
          is a global community dedicated to the path of Bhakti Yoga and selfless service.
        </p>
      </section>

      <section className="mission-section-about">
        <h2>Our Mission</h2>
        <div className="mission-cards-about">
          <div className="card-about">
            <h3>Spiritual Education</h3>
            <p>
              Sharing the wisdom of the Vedic scriptures and promoting a lifestyle
              rooted in spiritual awareness.
            </p>
          </div>
          <div className="card-about">
            <h3>Food for Life</h3>
            <p>
              Providing free, nutritious vegetarian meals to millions across the globe
              as a form of selfless service.
            </p>
          </div>
          <div className="card-about">
            <h3>Community Building</h3>
            <p>
              Establishing vibrant temple communities where individuals can connect and
              grow spiritually.
            </p>
          </div>
        </div>

        <div className="button-container">
          <button className="custom-btn-about">History</button>
          <button className="custom-btn-about">Who We Are</button>
          <button className="custom-btn-about">Our Mission</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
