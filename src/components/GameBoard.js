import React from 'react'
import TurnTracker from './TurnTracker';
import Winner from './Winner';
import { useState } from 'react';
import CheckWinner from '../utils/CheckWinner';

export default function GameBoard({ tileSymbols, gameSymbol, setGameSymbol }) {

  const PlayerNumber = {
    1 : "X",
    2 : "O"
  }

  const [player, setPlayer] = useState(1);

  const playerClick = (boxId) => {

    setGameSymbol( (prev) => {
      const newObj = {...prev};

      if(newObj[boxId] === ""){

        setPlayer( () => { 
          switch(player){

            case 1:
              newObj[boxId] = PlayerNumber[1];
              CheckWinner(newObj);
              return 2;

            case 2:
              newObj[boxId] = PlayerNumber[2];
              CheckWinner(newObj);
              return 1;

          }
        });
      }    
      return newObj;
    });
  };  
  
  
  return (
    <>    
    <TurnTracker/>

    <div className="gridContainer">
      <div className="gridItem" onClick={ () => {playerClick(1)}} >{gameSymbol[1]}</div>
      <div className="gridItem" onClick={ () => {playerClick(2)}} >{gameSymbol[2]}</div>
      <div className="gridItem" onClick={ () => {playerClick(3)}} >{gameSymbol[3]}</div>
      <div className="gridItem" onClick={ () => {playerClick(4)}} >{gameSymbol[4]}</div>
      <div className="gridItem" onClick={ () => {playerClick(5)}} >{gameSymbol[5]}</div>
      <div className="gridItem" onClick={ () => {playerClick(6)}} >{gameSymbol[6]}</div>
      <div className="gridItem" onClick={ () => {playerClick(7)}} >{gameSymbol[7]}</div>
      <div className="gridItem" onClick={ () => {playerClick(8)}} >{gameSymbol[8]}</div>
      <div className="gridItem" onClick={ () => {playerClick(9)}} >{gameSymbol[9]}</div>
    </div>

    <Winner/>
    </>

  )
}
