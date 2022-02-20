import React from 'react';
import { CustomButton, CustomCheckbox } from '../../../../components';
import "./Settings.css"
const Settings=()=> {
  return <div className='settings-wrapper'>
      <div className="settings-title">
          Настройки
      </div>
      <div className="settings-features">
        <div className="settings-features__item">
        <CustomCheckbox /> <div>Не запрашивать подтверждение о повышении ставки</div>

        </div>
        <div className="settings-features__item">
        <CustomCheckbox /> <div>Получать смс-уведомление о изменениях в моих подписках</div>

        </div>
        <div className="settings-features__item">
        <CustomCheckbox /> <div>Получать смс-уведомление о изменениях в торгах в которых я принял участие</div>

        </div>
        <div className="setting-submit">
          <CustomButton>Сохранить</CustomButton>
        </div>
      </div>
  </div>;
}

export default Settings;
