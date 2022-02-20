
import React from "react";
import { CustomButton,AuthLayout } from "../../../components";

import { Link, useNavigate } from "react-router-dom";

import "./ForgotForm.css";

const ForgotForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        authContent={
          <>
          
            <div className="forgot-title">Восстановление пароля</div>
            <div className="forgot-form">
              <div className="forgot-form__email">
                  <input type="text" placeholder="E-mail" />
              </div>
              <div className="forgot-form__submit">
              <CustomButton disabled onClick={() => navigate("/forgot/sended")}>
                Восстановить
              </CustomButton>
            </div>
            </div>

            
            
          </>
        }
      />
    </>
  );
};

export default ForgotForm;
