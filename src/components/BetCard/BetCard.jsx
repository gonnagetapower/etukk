
import React from "react";
// import defaultBetcardImage from "../../assets/bet_card/default_betcard_image.png";
// import betCardCountryLogo from "../../assets/bet_card/bet_card_country_logo.png";
// import markImage from "../../assets/bet_card/mark_image.png";


import "./BetCard.css";
const BetCard = () => {
  return (
    <div className="bet-card__wrapper">
      <div className="bet-card__mark">
        {/* <img src={markImage} alt="mark_image" /> */}
      </div>
      <div className="bet-card__image">
        {/* <img src={defaultBetcardImage} alt="bet_card_image" /> */}
      </div>
      <div className="bet-card_content">
        <div className="bet-card__title">
          Карточка для тестов и чего чявлфылв
        </div>
        <div className="bet-card__country">
          <span>г. Москва</span>
          {/* <img src={betCardCountryLogo} alt="bet_card_country_logo" /> */}
        </div>
        <div className="bet-card__data">
          <div className="betcard-data__bet">
            <span>Моя ставка</span> <span>1 100₽</span>
          </div>
          <div className="betcard-data__current-bet">
            <span>Текущая ставка</span> <span>1 400₽</span>
          </div>
          <div className="betcard-data__end-auction">
            <span>
              Окончание <br /> торгов
            </span>
            <span>00:09:09:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetCard;
