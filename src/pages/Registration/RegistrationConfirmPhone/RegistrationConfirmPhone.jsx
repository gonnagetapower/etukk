/** @format */

import React from "react";
import { CustomButton, AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./RegistrationConfirmPhone.css";

const RegistrationConfirmPhone = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="confirm-phone__title">
              Подтвердите номер телефона
            </div>
            <div className="confirm-phone__title-n">
              В течение 1 минуты на указанный номер телефона придет СМС
              сообщение с 4 значным кодом.
              <br /> <br /> Введите его в форму подтвержения.
            </div>
            <div className="confirm-phone__form">
              <input
                type="tel"
                id="1"
                placeholder="x"
                maxLength={1}
                className="first-activation__input activation-input"
              />
              <input
                type="tel"
                id="2"
                placeholder="x"
                maxLength={1}
                className="second-activation__input activation-input"
              />
              <input
                type="tel"
                id="3"
                placeholder="x"
                maxLength={1}
                className="third-activation__input activation-input"
              />
              <input
                type="tel"
                id="4"
                placeholder="x"
                maxLength={1}
                className="fouth-activation__input activation-input"
              />
            </div>
            <div className="confirm-phone__again">Отправить код еще раз</div>
            <div className="confirm-phone__submit">
              <CustomButton
                disabled
                onClick={() => navigate("/registration/confirmEmail")}
              >
                Подтвердить
              </CustomButton>
            </div>
          </>
        }
      />
    </>
  );
};

export default RegistrationConfirmPhone;
