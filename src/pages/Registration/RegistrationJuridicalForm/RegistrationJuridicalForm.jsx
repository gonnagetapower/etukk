import React from "react";
import { CustomButton,AuthLayout, CustomCheckbox } from "../../../components";
import recaptchaIcon from "../../../assets/icons/recaptcha_icon.png"
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationJuridicalForm.css";

const RegistrationJuridicalForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthLayout
        authContent={
          <>
            <div className="juridical-title">Регистрация</div>
            <div className="juridical-form">
              <div className="juridical-form__name">
                <input  type="text" placeholder="Название организации" />
              </div>

              <div className="juridical-form__inn">
                <input type="text" placeholder="ИНН" />
              </div>

              <div className="juridical-form__email">
                <input type="text" placeholder="E-mail" />
              </div>

              <div className="juridical-form__phone">
                <input type="text" placeholder="Номер телефона" />
              </div>

              <div className="juridical-form__password">
                <input type="text" placeholder="Пароль" />
              </div>
              <div className="juridical-form__repassword">
                <input type="text" placeholder="Повторите пароль" />
              </div>
              <div className="juridical-formchecks">
                <div className="juridical-formchecks__agreement">
                <CustomCheckbox  />

                  <a href="#">Принимаю условия соглашения</a>
                </div>
                <div className="juridical-formchecks__bot">
                <CustomCheckbox />

                  <label>Я не робот</label>
                  <img src={recaptchaIcon} alt="recaptcha_icon" />
                </div>
              </div>

              <div className="juridical-form__submit">
                <CustomButton disabled onClick={()=>navigate("/registration/confirmPhone")}>Регистрация</CustomButton>
              </div>
            </div>
            <div className="juridical-toauth">
              <Link to="/login">Войти</Link>
            </div>
          </>
        }
      />
    </>
  );
};

export default RegistrationJuridicalForm;
