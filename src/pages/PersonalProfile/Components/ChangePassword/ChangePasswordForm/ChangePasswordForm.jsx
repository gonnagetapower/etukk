import React from 'react';
import {CustomButton} from "../../../../../components";

import "./ChangePasswordForm.css"
const ChangePasswordForm=()=> {
  return <div className='change-password__form-wrapper'>
<div className="change-password__title">
      Смена пароля
    </div>
    <div className="change-password__data">
        <input placeholder='Новый пароль' />
        <input placeholder='Повторите новый пароль' />

    </div>
    <div className="change-password__submit">
      <CustomButton >Сохранить</CustomButton>
    </div>
  </div>;
}

export default ChangePasswordForm;
