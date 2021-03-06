import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import React from 'react'
import { useState } from 'react';

function App() {

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

  let score = {
    "1" : 0,
    "2" : 0
  }

  const [playerScore, setPlayerScore] = useState(score);
  const [gameSymbol,setGameSymbol] = useState(tileSymbols);
  const [player, setPlayer] = useState(1);
  
  return (
    <>
    <Header tileSymbols={tileSymbols} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}/>
    <GameBoard tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} setPlayerScore={setPlayerScore} player={player} setPlayer={setPlayer}></GameBoard>    
    </>
  );
}

export default App;
