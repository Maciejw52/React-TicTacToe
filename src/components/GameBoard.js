import React from 'react'
import TurnTracker from './TurnTracker';
import { useState } from 'react';
import CheckWinner from '../utils/CheckWinner';

export default function GameBoard({ tileSymbols, gameSymbol, setGameSymbol, score, playerScore, setPlayerScore }) {

  const PlayerNumber = {
    1 : "X",
    2 : "O"
  }

  const [player, setPlayer] = useState(1);

  const playerClick = (boxId) => {

    setGameSymbol( (prev) => {

      const newObj = {...prev};
      // will only allow player to select if the game is not yet won
      if(!CheckWinner(newObj)){
        // only allows player to place X/O in an empty field
        if(newObj[boxId] === ""){
          
          // sets the empty field to X/O
          newObj[boxId] = PlayerNumber[player];

          // checks if the current player has won and if so adds 1 to their tally
          if(CheckWinner(newObj)){
            setPlayerScore( (previous) => {
              const obj = {...previous};
              obj[player] =+ 1;
              
              // create alert here to pop up and say who won

              //reset game still in progress
              setTimeout(setGameSymbol(tileSymbols), 2000)
              return obj;

            });
          };

          // Sets the next player
          setPlayer( () => { 
            switch(player){
              case 1:
                return 2;
              case 2:
                return 1;
              }
          });
        }    
      } else {
        // Once the player has won it resets game
        setGameSymbol(tileSymbols);
      }
      return newObj;
    });
  };  
  
  
  return (
    <>    
    <TurnTracker player={player}/>

    <div className="gridContainer">
      <div className="gridItem12" onClick={ () => {playerClick(1)}} >{gameSymbol[1]}</div>
      <div className="gridItem12" onClick={ () => {playerClick(2)}} >{gameSymbol[2]}</div>
      <div className="gridItem3" onClick={ () => {playerClick(3)}} >{gameSymbol[3]}</div>
      <div className="gridItem" onClick={ () => {playerClick(4)}} >{gameSymbol[4]}</div>
      <div className="gridItem" onClick={ () => {playerClick(5)}} >{gameSymbol[5]}</div>
      <div className="gridItem69" onClick={ () => {playerClick(6)}} >{gameSymbol[6]}</div>
      <div className="gridItem" onClick={ () => {playerClick(7)}} >{gameSymbol[7]}</div>
      <div className="gridItem" onClick={ () => {playerClick(8)}} >{gameSymbol[8]}</div>
      <div className="gridItem69" onClick={ () => {playerClick(9)}} >{gameSymbol[9]}</div>
    </div>
    </>

  )
}
