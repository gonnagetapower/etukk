/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components";
import auctionLogoMain from "../../assets/auction_logo_main.png";

import "./Missing.css";
const Missing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="missing-wrapper">
      <div className="missing-empty"></div>
      <div className="missing-error">
        <div>404</div>

        <div>
          <span>Ошибка</span> <span>страницы не существует</span>
        </div>
        <CustomButton reverse onClick={() => navigate("/")}>На главную</CustomButton>
        <div onClick={() => window.history.back()}>Вернуться назад</div>
      </div>

      <div className="missing-logo">
        <img src={auctionLogoMain} alt="auction_logo_main" />
      </div>
    </div>
  );
};

export default Missing;