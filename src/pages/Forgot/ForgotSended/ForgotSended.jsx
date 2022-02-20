
import React from "react";
import { CustomButton, AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./ForgotSended.css";

const ForgotSended = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="forgot-title">Восстановление пароля</div>
            <div className="forgot-sended__titlen">
              Ссылка для восстановления пароля <br /> успешно отправлена. <br />
              Проверьте почту!
            </div>
            <CustomButton onClick={() => navigate("/forgot/change")}>
              На главную
            </CustomButton>
          </>
        }
      />
    </>
  );
};

export default ForgotSended;
