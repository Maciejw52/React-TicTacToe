import React from 'react'
import TurnTracker from './TurnTracker';
import Winner from './Winner';
import { useState, useEffect } from 'react';

let FIRSTPLAYER = true;
let symbol;

export default function GameBoard() {
  let tileSymbols = {
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : ""
  };
  
  const [gameSymbol,setGameSymbol] = useState(tileSymbols);
  const [player, setPlayer] = useState(FIRSTPLAYER);

  const playerClick = (boxId) => {

    setGameSymbol( (prev) => {
      const newObj = {...prev};

      if(newObj[boxId] === ""){

        setPlayer( (bool) => { 
          switch(symbol){
            case "X":
              symbol = "O";
              break;
            case "O":
              symbol = "X";
              break;
            default:
              symbol = "X";
          }
          return bool;
        });

        newObj[boxId] = symbol;
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
