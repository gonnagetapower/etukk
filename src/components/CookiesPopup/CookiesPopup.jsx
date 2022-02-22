import React from "react";
import {CustomButton} from "../"
import "./CookiesPopup.css";
const CookiesPopup = () => {
  const [active,setActive]=React.useState(true);

  return (
    <>
    {active && <div className="cookies-popup__wrapper">
      <div className="cookies-popup__title">
        Этот сайт использует файлы cookies. Продолжая использовать наш сайт, вы
        соглашаетесь с использованием данных <br /> технологий.
      </div>
      <div className="cookies-popup__button">
        <CustomButton onClick={()=>setActive(false)}>ок</CustomButton>
      </div>
    </div>}
    
    </>
  );
};

export default CookiesPopup;
