import React from 'react';
import {BetCard} from "../../../../components"
import  "./OutbidBets.css"
const OutbidBets= ()=> {
  return <div className='outbid-bets__wrapper'>
      {Array(1).fill(0).map((_,index)=><div className='outbid-bets_card' key={index}><BetCard  /> </div>)}
  </div>;
}

export default OutbidBets;
