import React from 'react';
import { CustomButton } from '../../../../components';
import "./Leave.css"
const Leave=()=> {
  return <div className='leave-wrapper'>
      <div className="leave-title">
        Выйти из профиля?
      </div>
      <div className="leave-buttons">
          <CustomButton>Да</CustomButton>
          <CustomButton outlined>Не в этот раз</CustomButton>

      </div>
  </div>;
}

export default Leave;
