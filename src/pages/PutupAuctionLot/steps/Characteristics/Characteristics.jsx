
import React from "react";

// import charsAddIcon from "../../../../assets/icons/putup_lot/chars_add_icon.png";



import "./Characteristics.css";

const Characteristics = () => {

  return <div className="pal-chars__wrapper">
    <div className="pal-chars__title">Укажите характеристики</div>
    <div className="pal-chars__titlen">*не более 10 характеристик</div>
    <div className="pal-chars__inputs">
      <input placeholder="Название..." />
      <input placeholder="Значение..." />
    </div>
    {/* <div className="pal-chars__items">
     
    </div> */}
    <div className="pal-chars__add">
      <span>Добавить характеристику</span>
      {/* <img src={charsAddIcon} alt="pal_chars_add_icon" /> */}
    </div>
   

  </div>;
};

export default Characteristics;
