import React from 'react';


import "./Description.css"
const Description=()=> {
  return <div className='pal-dsc__wrapper'>
    <div className="pal-dsc__title">
    Описание лота
    </div>
    <div className="pal-dsc__titlen">
    В описании необходимо отразить состояние лота, продолжительность владения, наличие нюансов и дефектов, габаритные размеры при междугородней доставке
    </div>
    <div className="pal-dsc__form">
      <div className="pal-dsc__form-title">
      Расскажите подробнее о выставляемом лоте
      </div>
      <div className="pal-dsc__form-area">
        <textarea placeholder='Описание...' />
      </div>
    </div>
    
  </div>;
}

export default Description;
