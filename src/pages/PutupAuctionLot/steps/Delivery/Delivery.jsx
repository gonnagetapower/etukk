

import React from "react";
import "./Delivery.css";
const Delivery = () => {
  return (
    <div className="pal-delivery__wrapper">
      <div className="pal-delivery__title">Торги и доставка</div>
      <div className="pal-delivery__date">
        <div className="pal-delivery__date-title">
          Период публикации лота и проведения торгов
        </div>
        <div className="pal-delivery__date-radios">
          <div className="delivery-date__radios-item">
            <input type="radio" />
            <span>Сегодня 21.09.21 в 20:00 - 22:00</span>
          </div>
          <div className="delivery-date__radios-item">
            <input type="radio" />
            <span>Сегодня 21.09.21 в 20:00 - 22:00</span>
          </div>
          <div className="delivery-date__radios-item">
            <input type="radio" />
            <span>Сегодня 21.09.21 в 20:00 - 22:00</span>
          </div>
          <div className="delivery-date__radios-item">
            <input type="radio" />
            <span>Сегодня 21.09.21 в 20:00 - 22:00</span>
          </div>
        </div>
      </div>
      <div className="pal-delivery__features">
        <div className="pal-delivery__features-sum">
          <span>Укажите сумму минимальной ставки</span>

          <input placeholder="Введите сумму..." />
        </div>
        <div className="pal-delivery__features-country">
          <span>Укажите ваш город</span>

          <input placeholder="Укажите город......" />
        </div>
      </div>
      <div className="pal-delivery__features-del">
        <span>Выберите вариант возможной доставки </span>
        <input placeholder="Вариант доставки" />
      </div>
    </div>
  );
};

export default Delivery;
