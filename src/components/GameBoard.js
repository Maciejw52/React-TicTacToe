import React from 'react'
import { useState } from 'react';
import TurnTracker from './TurnTracker';
import CheckWinner from '../utils/CheckWinner';
import CheckNoWinner from '../utils/CheckNoWinner';
import SetPlayerSwitch from '../utils/SetPlayerSwitch';
import ModalShowWinner from './ModalShowWinner';
import ModalShowNoWinner from './ModalShowNoWinner';

export default function GameBoard({ tileSymbols, gameSymbol, setGameSymbol, setPlayerScore, player, setPlayer }) {

  const PlayerNumber = {
    1 : "X",
    2 : "O"
  }

  // Modal popup if there is a winner
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setPlayer(SetPlayerSwitch(player));
    setShow(false);
  };

  // Modal popup if there is no winner
  const [noWinner, setShowNoWinner] = useState(false);
  const handleCloseNoWinner = () => {
    setPlayer(SetPlayerSwitch(player));
    setShowNoWinner(false);
  };

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
              obj[player] = obj[player] + 1;
              
              // create alert here to pop up and say who won
              setShow(true);

              //reset game after 2 seconds
              setTimeout(() => {
                console.log('Game Restarting')
                setGameSymbol(tileSymbols);
              }, 2000);

              
              return obj;

            });
          } else if( CheckNoWinner(newObj) ){
            
            setShowNoWinner(true);

            setTimeout(() => {
              console.log('Game Restarting')
              setGameSymbol(tileSymbols);
            }, 2000);
          } else if (true){
            setPlayer(SetPlayerSwitch(player));
          }

        }    
      }
      return newObj;
    });
  };    
  
  return (
    <>
    <div className='gameboard'>
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
    </div>
    <ModalShowWinner handleClose={handleClose} show={show} player={player} />
    <ModalShowNoWinner handleCloseNoWinner={handleCloseNoWinner} noWinner={noWinner} />
    </>

  )
}
