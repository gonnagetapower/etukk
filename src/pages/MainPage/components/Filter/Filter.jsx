import React from 'react';
import './Filter.css';
import showMoreIcon from '../../../../assets/icons/main_page/showmore_icon.svg';
import lineHidden from '../../../../assets/icons/main_page/line_hidden.svg';
const Filter = () => {
  return (
    <>
    <div class="filter-wpapper">
          <div>Фильтр</div>
          <div>Сбросить</div>
          <img src={showMoreIcon} />
          <img src={lineHidden} />
    </div>
    </>
  )
}

export default Filter;