import React, { useState } from "react";
import Edu from "../Assets/cards/edu.jpg";
import Feed from "../Assets/cards/feed.jpg";
import Celeb from "../Assets/cards/celebrate.jpg";
import Help from "../Assets/cards/Help1.webp";
import "./card.css";

export default function Cards() {
  // State to track which card has been clicked
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveCard(index); // Set active card on mouse enter
  };

  return (
    <div className="c">
      <h1 className='titleCard'>What Makes Us Different</h1>
      <div className="card__container">
        <article
          className={`card__article ${activeCard === 0 ? "show" : ""}`}
          onMouseEnter={() => handleMouseEnter(0)}
          style={{marginLeft:"5px"}}
        >
          <img src={Edu} alt="image" className="card__image" />
          <div className="card__data">
          <h2 className="card__title">We Educate</h2>
            <span className="card__description">ISKCON educates 100,000+ students globally through schools and spiritual programs in 65+ countries.</span>
          </div>
        </article>

        <article
          className={`card__article ${activeCard === 1 ? "show" : ""}`}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <img src={Feed} alt="image" className="card__image" />
          <div className="card__data">
          <h2 className="card__title">We Feed</h2>
            <span className="card__description">ISKCON feeds 1.2M+ people daily worldwide with sanctified vegetarian meals.</span>

          </div>
        </article>

        <article
          className={`card__article ${activeCard === 2 ? "show" : ""}`}
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <img src={Celeb} alt="image" className="card__image" />
          <div className="card__data">
          <h2 className="card__title">We Celebrate</h2>
            <span className="card__description">ISKCON unites millions across 65+ countries through festivals and spiritual events.</span>

          </div>
        </article>

        <article
          className={`card__article ${activeCard === 3 ? "show" : ""}`}
          onMouseEnter={() => handleMouseEnter(3)}
          style={{marginRight:"5px"}}
        >
          <img src={Help} alt="image" className="card__image" />
          <div className="card__data">
          <h2 className="card__title">We Help</h2>
            <span className="card__description" style={{width:"110%"}}>ISKCON fosters community and supports spiritual growth among its followers.</span>

          </div>
        </article>

        
      </div>
    </div>
  );
}
