import React from 'react';
import {BetCard} from "../../../../components"
import  "./WiningBets.css"
const WiningBets= ()=> {
  return <div className='wining-bets__wrapper'>
      {Array(12).fill(0).map((_,index)=><div className='wining-bets_card' key={index}><BetCard  /> </div>)}
  </div>;
}

export default WiningBets;
