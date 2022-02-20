import React from 'react'
// import filterIcon from "../../../../assets/icons/user_profile/filter_icon.png";
import {BetCard} from "../../../../components";
import "./EndedLots.css"
const EndedLots=()=> {
  return (
    <div className='user-profile__endedlots-wrapper'>
    <div className="up-endedlots__search">
      <input type="text" placeholder='Поиск...' />
      {/* <img src={filterIcon} alt="filter_icon" /> */}
    </div>
    <div className="up-endedlots__lots">
     

     
      {Array(2).fill(0).map((arr,index)=>
       <div key={index} className="up-endedlots__lots-item">
      <BetCard  />
      </div>
      )}
      
    </div>
  </div>
  )
}

export default EndedLots