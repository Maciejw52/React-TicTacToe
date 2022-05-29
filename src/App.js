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
  
  const [gameSymbol,setGameSymbol] = useState(tileSymbols);
  
  return (
    <>
    <Header tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol}/>
    <GameBoard tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} />
    </>
  );
}

export default App;
