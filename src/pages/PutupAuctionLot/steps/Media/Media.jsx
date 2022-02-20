/** @format */

import React from "react";


// import cameraIcon from "../../../../assets/icons/putup_lot/image_camera_icon.png";

import "./Media.css";
const Media = () => {
  return (
    <div className="pal-media__wrapper">
      <div className="pal-media__title">Фото и видео лота</div>
      <div className="pal-media__titlen">
        Уважаемый пользователь, обращаем Ваше внимание на то, что при
        расширенном описании своего товара и характеристик, у Вас будет
        конкурентное преимущество продать его выгодней и быстрей
      </div>
      <div className="pal-media__photo">
        <span>Фото</span>
        <div className="pal-media__photo-change">
          {/* <img src={cameraIcon} alt="camera_icon" /> */}
        </div>
      </div>
      <div className="pal-media__video">
        <div className="pal-media__video-title">Видео</div>
        <div className="pal-media__video-titlen">
          Вставьте ссылку на видео в YouTube
        </div>
        <div className="pal-media__video-titlenn">
          По нашим данным размещение лота с видео повышает цену продажи на 16 %
          и более
        </div>
        <div className="pal-media__video-input">
          <input placeholder="Ссылка на видео" />
        </div>
      </div>
      
    </div>
  );
};

export default Media;
