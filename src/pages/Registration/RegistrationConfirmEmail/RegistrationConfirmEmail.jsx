import React from "react";
import { CustomButton,AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./RegistrationConfirmEmail.css";

const RegistrationConfirmEmail = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="confirm-email__title">Подтвердите <br /> E-mail</div>
            <div className="confirm-email__title-n">
              Благодарим за подтвержение номера <br /> телефона.
              
            </div>
            <div className="confirm-email__title-nn">
                На указанную Вами почту отправлено письмо со ссылкой. Перейдите
                по ней, для подтверждения Е-mail адреса
              </div>
            <div className="confirm-email__tomain">
              <CustomButton disabled onClick={() => navigate("/registration/congratulations")}>
                На главную
              </CustomButton>
            </div>
          </>
        }
      />
    </>
  );
};

export default RegistrationConfirmEmail;
