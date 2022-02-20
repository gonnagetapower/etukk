
import React from "react";
import { CustomButton,AuthLayout } from "../../../components";
import {useNavigate} from "react-router-dom";
import "./RegistrationChoiceStatus.css";

const RegistrationChoiceStatus = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="registration-choice__title">Регистрация</div>
            <div className="registration-choice__title-n">
              Укажите свой статус
            </div>
            <div className="registration-choice__items">
              <CustomButton onClick={()=>navigate("/registration/individual")} outlined>Частное лицо</CustomButton>
              <CustomButton onClick={()=>navigate("/registration/juridical")}  outlined>Юридическое лицо</CustomButton>
            </div>
          </>
        }
      />
    </>
  );
};

export default RegistrationChoiceStatus;
