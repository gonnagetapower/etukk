
import React from "react";


import "./LotName.css";
const LotName = () => {
  return (
    <div className="pal-lotname__wrapper">
      <div className="pal-lotname__title">Название лота</div>
      <div className="pal-lotname__input">
        <input placeholder="Напишите название лота..." />
      </div>
    
    </div>
  );
};

export default LotName;
