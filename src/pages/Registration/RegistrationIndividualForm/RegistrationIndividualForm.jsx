import React from "react";
import { AuthLayout, CustomButton, CustomCheckbox } from "../../../components";
// import appleIcon from "../../../../assets/icons/media/apple_icon.png";
// import recaptchaIcon from "../../../../assets/icons/recaptcha_icon.png"


// import googleIcon from "../../../../assets/icons/media/go_icon.png";

// import yandexIcon from "../../../../assets/icons/media/yandex_icon.png";

import { Link, useNavigate } from "react-router-dom";

import "./RegistrationIndividualForm.css";

const RegistrationIndividualForm = () => {
  const navigate = useNavigate();
//   const mediaItems = [
//     { id: 0, icon: yandexIcon, title: "yandex" },
//     { id: 1, icon: googleIcon, title: "google" },
//     { id: 2, icon: appleIcon, title: "apple" },
    
//   ];

  return (
    <>
      <AuthLayout
        authContent={
          <>
            {/* <div className="individual-title">Регистрация</div>

            <div className="individual-via">
              <div className="individual-via__title">Войти через</div>
              <div className="individual-via__social">
                {mediaItems &&
                  mediaItems.map((item, index) => (
                    <img
                      src={item.icon}
                      alt={`media_icon_${item.title}`}
                      key={`${item.id}:${index}`}
                    />
                  ))}
              </div>
            </div>
            <div className="individual-form">
              <div className="individual-form__name">
                <input type="text" placeholder="Имя" />
              </div>

              <div className="individual-form__email">
                <input type="text" placeholder="E-mail" />
              </div>

              <div className="individual-form__phone">
                <input type="text" placeholder="Номер телефона" />
              </div>

              <div className="individual-form__password">
                <input type="text" placeholder="Пароль" />
              </div>
              <div className="individual-form__repassword">
                <input type="text" placeholder="Повторите пароль" />
              </div>
              <div className="individual-formchecks">
                <div className="individual-formchecks__agreement">
                <CustomCheckbox  />
                  <a href="#">Принимаю условия соглашения</a>
                </div>
                <div className="individual-formchecks__bot">
                <CustomCheckbox />

                  <label>Я не робот</label>
                  <img src={recaptchaIcon} alt="recaptcha_icon" />

                </div>
              </div>

              <div className="individual-form__submit">
                <CustomButton
                disabled
                  onClick={() => navigate("/registration/confirmPhone")}
                >
                  Регистрация
                </CustomButton>
              </div>
            </div>
            <div className="individual-toauth">
              <Link to="/login">Войти</Link>
            </div> */}
          </>
        }
      />
    </>
  );
};

export default RegistrationIndividualForm;
