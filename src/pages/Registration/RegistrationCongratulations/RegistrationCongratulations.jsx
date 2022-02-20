import React from "react";
import { CustomButton,AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./RegistrationCongratulations.css";

const RegistrationCongratulations = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="congratulations-title">Подтвердите E-mail</div>
            <div className="congratulations-title__n">
              Вы успешно подтвердили телефон и E-mail адрес.
              <br />
              Рады приветствовать вас на etukk.ru!
            </div>
            <div className="congratulations-tomain">
              <CustomButton onClick={() => navigate("/")}>
                На главную
              </CustomButton>
            </div>
          </>
        }
      />
    </>
  );
};

export default RegistrationCongratulations;
