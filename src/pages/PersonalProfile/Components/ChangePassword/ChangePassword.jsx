import React from 'react';
import {CustomButton, ModalConfirm} from "../../../../components";
import "./ChangePassword.css"
const ChangePassword=()=> {
  return <div className='change-password__wrapper'>
    <div className="change-password__title">
      Смена пароля
    </div>
    <div className="change-password__submit">
      <ModalConfirm modalTitle={"Ссылка для смены пароля отправлена на почту"} buttonTitle={"Сменить пароль"} />
    </div>
  </div>;
}

export default ChangePassword;
