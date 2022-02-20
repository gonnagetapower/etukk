
import React from "react";
import { CustomButton, AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./ForgotChange.css";

const ForgotChange = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="forgot-title">Восстановление пароля</div>
            <div className="forgot-form">
              <div className="forgot-form__password">
                <input type="text" placeholder="Новый пароль" />
              </div>
              <div className="forgot-form__repassword">
                <input type="text" placeholder="Повторите новый пароль" />
              </div>
              <div className="forgot-form__submit">
                <CustomButton disabled>Сохранить</CustomButton>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default ForgotChange;
