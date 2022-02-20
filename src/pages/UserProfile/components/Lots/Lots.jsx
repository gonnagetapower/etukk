import React from 'react'
// import filterIcon from "../../../../assets/icons/user_profile/filter_icon.png";
import {BetCard} from "../../../../components";

import "./Lots.css"
const Lots=()=> {
  return (
    <div className='user-profile__lots-wrapper'>
      <div className="up-lots__search">
        <input type="text" placeholder='Поиск...' />
        {/* <img src={filterIcon} alt="filter_icon" /> */}
      </div>
      <div className="up-lots__lots">
       

       
        {Array(4).fill(0).map((arr,index)=>
         <div key={index} className="up-lots__lots-item">
        <BetCard  />
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Lots