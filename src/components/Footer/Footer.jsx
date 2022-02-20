
import React from "react";

// import auctionLogo from "../../assets/auction_logo.png";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        {/* <img src={auctionLogo} alt="footer_logo" /> */}
      </div>
      <div className="footer-features__user footer-column">
        <span>Избранное</span>
        <span>Выставить лот</span>
        <span>Все права защищены, 2021©</span>
      </div>
      <div className="footer-features__profile footer-column">
        <span>Уведомления</span>
        <span>Профиль</span>
        <a href="#">Правила пользования сайтом</a>
      </div>
      <div className="footer-features__help footer-column">
        <span>Техподдержка</span>
        <span>О нас</span>
        <a href="#">Политика конфиденциальности</a>
      </div>
      <div className="footer-features__contact footer-column">
        <span>+7 (900) 999-99-99</span>
        <span>Etukk@mail.ru</span>
      </div>
    </div>
  );
};

export default Footer;
