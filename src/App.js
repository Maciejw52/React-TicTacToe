import './App.css';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import React from 'react'
import { useState } from 'react'

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
  
  return (
    <>
    <Header tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}/>
    <GameBoard tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}></GameBoard>
    </>
  );
}

export default App;
