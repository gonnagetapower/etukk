import React from 'react';
import { CustomButton } from '../../../../components';
import "./PersonalInformation.css"
const PersonalInformation =()=> {
  return <div className='personal-information__wrapper'>
      <div className="pi-title">
        Личная информация
      </div>
      <div className="pi-data">
        <input type="text" value="Игорь" />
        <input type="text" value="Частное лицо" />
        <input type="text" value="KGHJ@mail.ru" />
        <input type="text" value="+7 (900) 777-76-76" />
      </div>
      <div className="pi-submit">
        <CustomButton>Сохранить</CustomButton>
      </div>
  </div>;
}

export default PersonalInformation;
