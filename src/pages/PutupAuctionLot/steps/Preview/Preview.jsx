
import React from "react";
import { CustomButton, Footer, Menu } from "../../../../components";
// import arrowBack from "../../../../assets/icons/personal_profile/arrow_back.png";
// import deliveryIcon from "../../../../assets/icons/putup_lot_preview/delivery_icon.png";

import "./Preview.css";
const Preview = () => {
  return (
    <>
      <Menu />
      <div className="pal-preview__wrapper">
        <div className="pal-preview-title">Просмотр лота перед публикацией</div>
        <div className="pal-preview__block">
          <div className="pal-preview-leftside">
            <div className="preview-leftside__images">images(пока что)</div>
            <div className="preview-leftside__description">
              <div className="preview-leftside__description-title">
                Описание лота
              </div>
              <span>
                Продается шайтан-арба,не бит, не крашен, валиком подшаманен.
                Ездила девушка от дома до работы в Краснодарский край. От души
                отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские.
                Год выпуска 1985.
              </span>
              <span>
                Продается шайтан-арба,не бит, не крашен, валиком подшаманен.
                Ездила девушка от дома до работы в Краснодарский край. От души
                отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские.
                Год выпуска 1985.
              </span>
              <span>
                Продается шайтан-арба,не бит, не крашен, валиком подшаманен.
                Ездила девушка от дома до работы в Краснодарский край. От души
                отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские.
                Год выпуска 1985.
              </span>
              <span>
                Продается шайтан-арба,не бит, не крашен, валиком подшаманен.
                Ездила девушка от дома до работы в Краснодарский край. От души
                отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские.
                Год выпуска 1985.
              </span>
            </div>
            <div className="preview-leftside__chars">
              <div className="preview-leftside__chars-title">
                Характеристики
              </div>
              <div className="preview-leftside__chars-content">
                <div className="preview-leftside__chars-item">
                  <span className="preview-leftside__key">Марка</span>
                  <span className="preview-leftside__value">ВАЗ</span>
                </div>
                <div className="preview-leftside__chars-item">
                  <span className="preview-leftside__key">Год выпуска</span>
                  <span className="preview-leftside__value">1985</span>
                </div>
                <div className="preview-leftside__chars-item">
                  <span className="preview-leftside__key">VIN-номер</span>
                  <span className="preview-leftside__value">
                    123456789101112
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pal-preview-rightside">
            <div className="preview-rightside__title">
              {/* <img src={arrowBack} alt="arrow_back" /> */}
              <span>ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</span>
            </div>
            <div className="preview-rightside__delivery">
              <span>г. Москва</span>
              {/* <img src={deliveryIcon} alt="preview_delivery_icon" /> */}
            </div>
            <div className="preview-rightside__startbet">
              <span className="preview-rightside__key">Начальная ставка</span>
              <span className="preview-rightside__value">100₽</span>
            </div>
            <div className="preview-rightside__startauction">
              <span className="preview-rightside__key">Начало торгов</span>
              <span className="preview-rightside__value">21.09.21 в 10:00</span>
            </div>
            <div className="preview-rightside__endauction">
              <span className="preview-rightside__key">Окончание торгов</span>
              <span className="preview-rightside__value">21.09.21 в 10:00</span>
            </div>
            <div className="preview-rightside__features">
              <CustomButton>Редактировать</CustomButton>
              <CustomButton outlined>Поместить в архив</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Preview;
